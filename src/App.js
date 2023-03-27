import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer, OrdersContainer } from "./components";
import { useStateValue } from "./context/stateProvider";
import { getAllFoodItems, getAllPendingOrders } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";

const App = () => {
  const [{ foodItems, pendingOrders }, dispatch] = useStateValue();
  const [tables, setTables] = useState(0)

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  const fetchOrder = async () => {
    await getAllPendingOrders().then((data) => {
      console.log(data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <AnimatePresence wait>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full min-h-[90vh]">
          <Routes>
            <Route path="/*" element={<MainContainer tables={tables} setTables={setTables}/>} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/orders" element={<OrdersContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
