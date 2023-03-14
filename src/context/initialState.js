import { fetchCart, fetchUser } from "../utils/fetchLocalStorage";

const userInfo = fetchUser();
const cartInfo = fetchCart();
const orderInfo = fetchCart();

export const initialState = {
    user: userInfo,
    foodItems: null,
    tables: 0,
    cartShow: false,
    cartItems: cartInfo,
    pendingOrders: orderInfo,
};
