export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
        : localStorage.clear();

  return userInfo;
};

export const fetchCart = () => {
  const cartInfo =
    localStorage.getItem("cartItems") !== "undefined"
      ? JSON.parse(localStorage.getItem("cartItems"))
      : localStorage.clear();

  return cartInfo ? cartInfo : [];
};

export const fetchOrder = () => {
  const orderInfo =
    localStorage.getItem("pendingOrders") !== "undefined"
      ? JSON.parse(localStorage.getItem("pendingOrders"))
      : localStorage.clear();

  return orderInfo ? orderInfo : [];
};