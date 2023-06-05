import React from "react";
import { heroData } from "../utils/data";
import TablesContainer from "./TablesContainer";

const HomeContainer = ({ isSet, setIsSet, setTables, tables }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2" id="home">
      {/* left */}
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 p-2 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Waiter express
          </p>
          <div className="w-10 h-10 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src="img/waiter.png"
              alt="delivery"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        {!isSet ? (
          <>
            <p className="text-[2rem] lg:text-[3rem] font-bold tracking-wide text-headingColor">
              Welcome to the
              <span className="text-orange-600 text-[2rem] lg:text-[3rem]">
                {" "}
                e-waiter app
              </span>
            </p>
            <p className="text-base text-textColor md:w-[80%]">
              Select the table you are currently seated on and proceed to select
              your order from our menu.
            </p>
          </>
        ) : (
          <>
            <p className="text-[2rem] lg:text-[3rem] font-bold tracking-wide text-headingColor">
              Please go through our menu and place an
              <span className="text-orange-600 text-[2rem] lg:text-[3.5rem]">
                {" "}
                Order
              </span>
            </p>
            <p className="text-base text-textColor md:w-[80%]">
              Welcome to e-waiter app. Once you place your order, go to the
              cart icon and checkout the order. Once you've confirmed your order,
              press the checkout button. A popup window will appear asking you to pay either via
              cash or mpesa. Pay up and your order will be with you right away.
            </p>
            <a
              href="#menu"
              className="bg-gradient-to-br from-orange-400 to-orange-500 w-full text-center md:w-auto px-4 py-2 mb-5 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
            >
              Order Now
            </a>
          </>
        )}
      </div>

      {
        /* right */
        !isSet ? (
          <>
            <TablesContainer 
              setTables={setTables}
              tables={tables}
              setIsSet={setIsSet}
            />
          </>
        ) : (
          <div className="py-2 flex items-center relative">
            <img
              src="img/heroBg.png"
              alt="hero-bg"
              className="ml-auto h-420 w-full lg:w-auto lg:h-650"
            />

            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center xl:px-32 py-4 gap-4 flex-wrap">
              {heroData &&
                heroData.map((n) => (
                  <div
                    key={n.id}
                    className=" lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
                  >
                    <img
                      src={n.imageScr}
                      alt="i1"
                      className="w-20 lg:w-40 -mt-20"
                    />
                    <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                      {n.name}
                    </p>
                    <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                      {n.desc}
                    </p>
                    <p className="text-sm font-semibold text-headingColor">
                      <span className="text-xs text-red-600">Ksh</span>{" "}
                      {n.price}/=
                    </p>
                  </div>
                ))}
            </div>
          </div>
        )
      }
    </section>
  );
};

export default HomeContainer;
