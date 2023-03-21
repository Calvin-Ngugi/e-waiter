import React from "react";
import { useStateValue } from "../context/stateProvider";

const OrdersContainer = () => {
  const [{ pendingOrders }] = useStateValue();
  const data = pendingOrders?.map((n) => n);
  console.log(data);

  return (
    <div className="flex flex-col justify-center mt-5">
      <table className="border-collapse border-slate-500 hover:border-spacing-2">
        <tbody>
          <tr className="border-b-[2px] border-slate-500">
            <th>Image</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          {data && data.length > 0 ?(
          data.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.imageURL} className="max-h-[6rem] mx-auto" alt="item" />
              </td>
              <td className="text-center gap-8" style={{ width: "20rem" }}>
                {item?.title}
              </td>
              <td className="text-center" style={{ width: "20rem" }}>
                {item.qty}
              </td>
              <td className="text-center" style={{ width: "20rem" }}>
                {item.price}
              </td>
            </tr>
          ))): (
            <tr className="w-full h-full gap-6">
            <td colSpan="4" className="text-center">
              <img src="img/EmptyCart.svg" className="w-80 mt-5 mx-auto text-center" alt="" />
              <p className="text-xl text-textColor font-semibold mt-5">
              No orders available currently
            </p>
            </td> 
          </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersContainer;
