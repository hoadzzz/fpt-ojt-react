import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  setDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "./config";

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        firstName: user.displayName.split(" ")[0],
        lastName: user.displayName.split(" ")[1],
        email: user.email,
        phoneNumber: user.phoneNumber,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

const getCart = async (userId) => {
  try {
    const q = query(
      collection(db, "carts"),
      where("uid", "==", userId),
      where("status", "==", "active")
    );
    const docs = await getDocs(q);
    const emptyCart = {
      uid: userId,
      status: "active",
      products: [],
    };

    if (docs.docs.length > 0) {
      return docs.docs.at(0).data();
    } else {
      const emptyCart = {
        uid: userId,
        status: "active",
        products: [],
      };
      await addDoc(collection(db, "carts"), emptyCart);
      return emptyCart;
    }
  } catch (err) {
    alert(err.message);
  }
};

const updateCart = async (userId, cart) => {
  try {
    const q = query(
      collection(db, "carts"),
      where("uid", "==", userId),
      where("status", "==", "active")
    );
    const docs = await getDocs(q);

    const documentId = docs.docs.at(0).id;

    await setDoc(doc(collection(db, "carts"), documentId), cart);
  } catch (err) {
    alert(err.message);
  }
};

const checkoutCart = async (userId, cart, address, payment) => {
  try {
    const q = query(
      collection(db, "carts"),
      where("uid", "==", userId),
      where("status", "==", "active")
    );
    const docs = await getDocs(q);

    const documentId = docs.docs.at(0).id;
    const cartData = docs.docs.at(0).data();

    await deleteDoc(doc(collection(db, "carts"), documentId), cart);
    const order = {
      uid: userId,
      ...cartData,
      address,
      payment,
    };
    await setDoc(doc(collection(db, "orders"), documentId), order);
  } catch (err) {
    alert(err.message);
  }
};

export {
  getCart,
  auth,
  db,
  checkoutCart,
  updateCart,
  signInWithGoogle,
  signInWithEmailAndPassword,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  sendPasswordResetEmail,
  logout,
};
