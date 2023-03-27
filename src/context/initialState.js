import { fetchCart, fetchOrder, fetchUser } from "../utils/fetchLocalStorage";

const userInfo = fetchUser();
const cartInfo = fetchCart();
const orderInfo = fetchOrder();

export const initialState = {
    user: userInfo,
    foodItems: null,
    cartShow: false,
    cartItems: cartInfo,
    pendingOrders: orderInfo,
};
