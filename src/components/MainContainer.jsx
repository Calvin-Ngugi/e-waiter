import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useStateValue } from "../context/stateProvider";
import {
  HomeContainer,
  RowContainer,
  CartContainer,
  MenuContainer
} from "./index";

const MainContainer = ({tables, setTables}) => {
  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  const [isSet, setIsSet] = useState(false);

  useEffect(() => {}, [scrollValue, cartShow]);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      {!isSet ? (
        <div className="mt-10">
          <HomeContainer isSet={isSet} tables={tables} setIsSet={setIsSet} setTables={setTables}/>
        </div>
      ) : (
        <>
          <HomeContainer isSet={isSet}/>
          <h1 className="text-2xl font-semibold capitalize text-white mt-5 mb-3 bg-black rounded-xl p-3">
            Table Number {tables}
          </h1>
          <section className="w-full my-6">
            <div className="w-full flex items-center justify-between">
              <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
                Our Popular dishes
              </p>

              <div className="hidden md:flex gap-3 items-center">
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center"
                  onClick={() => setScrollValue(-200)}
                >
                  <MdChevronLeft className="text-lg text-white" />
                </motion.div>
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
                  onClick={() => setScrollValue(200)}
                >
                  <MdChevronRight className="text-lg text-white" />
                </motion.div>
              </div>
            </div>
            <RowContainer
              scrollValue={scrollValue}
              flag={true}
              tables={tables}
              data={foodItems?.filter((n) => n.category === "chicken")}
            />
          </section>

          <MenuContainer />
        </>
      )}

      {cartShow && <CartContainer tables={tables} />}
    </div>
  );
};

export default MainContainer;
