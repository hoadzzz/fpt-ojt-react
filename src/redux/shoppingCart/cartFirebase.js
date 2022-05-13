import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const getCart = async (userId) => {
  try {
    const querySnapshot = query(
      collection(db, "carts"),
      where("uid", "==", userId),
      where("status", "==", "active")
    );

    const docs = await getDocs(querySnapshot);

    return docs.docs.at(0).data;
  } catch (err) {
    alert(err.message);
  }
};

const getCartFromUser = async (userId) => {
  try {
    const q = query(collection(db, "users"), where("uid", "==", userId));
    const docs = await getDocs(q);
    const arrCart = [];
    docs.forEach((doc) => {
      arrCart.push(doc.data());
    });
    return arrCart;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
