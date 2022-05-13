import {
  createUserWithEmailAndPassword, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signOut
} from "firebase/auth";
import {
  addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, where
} from "firebase/firestore";
import { auth, db } from "./config";

const googleProvider = new GoogleAuthProvider();

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (email, name, firstName, lastName, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      email: user.email,
      displayName: name,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: '',
      photoURL: '',
      city: '',
      coverURL: ''
    });
  } catch (err) {
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
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

async function getDocID(user) {
  const querySnapshot = await getDocs(collection(db, "users"));
  let documentsID;
  querySnapshot.forEach((doc) => {
    if (doc.data().uid === user.uid) {
      documentsID = doc.id;
      return documentsID;
    }
  });
  return documentsID;
}

async function getDocData(user) {
  const querySnapshot = await getDocs(collection(db, "users"));
  let data;
  querySnapshot.forEach((doc) => {
    if (doc.data().uid === user.uid) {
      data = doc.data();
      return data;
    }
  });
  return data;
}
const pushToast = (toast, title, description, status) => {
  toast({
    title: title,
    description: description,
    status: status,
    duration: 3000,
    isClosable: true,
    position: 'top'

  })
}
export {
  googleProvider,
  auth,
  db,
  getCart,
  checkoutCart,
  updateCart,
  getDocID,
  signInWithEmailAndPassword,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  sendPasswordResetEmail,
  logout,
  pushToast,
  getDocData
};

