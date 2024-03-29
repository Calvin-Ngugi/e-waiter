import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../firebase";

// Saving new Item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, {
    merge: true,
  });
};

// getall food items
export const getAllFoodItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "foodItems"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};

// sending order to waiter side
export const sendOrder = async (data) => {
  await setDoc(doc(firestore, "pendingOrders", `${Date.now()}`), data, {
    merge: true,
  });
};

//getOrders
export const getAllPendingOrders = async () => {
  const items = await getDocs(
    query(collection(firestore, "pendingOrders"), orderBy("id"))
  );

  return items.docs.map((doc) => doc.data());
};