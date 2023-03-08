import React from "react";
import { heroData } from "../utils/data";

const HomeContainer = () => {
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

        <p className="text-[2.5rem] lg:text-[4rem] font-bold tracking-wide text-headingColor">
          Pick a table and place an
          <span className="text-orange-600 text-[2.5rem] lg:text-[4rem]">
            {" "}
            Order
          </span>
        </p>

        <p className="text-base text-textColor md:w-[80%]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
          debitis tempora dolorem voluptatibus iste tempore, quod sit laboriosam
          provident molestias ipsam quia, alias nostrum recusandae doloribus
          omnis? Quo, doloribus aliquam.
        </p>

        <button className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100">
          Order Now
        </button>
      </div>

      {/* right */}
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
                <img src={n.imageScr} alt="i1" className="w-20 lg:w-40 -mt-20" />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>
                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {n.desc}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">Ksh</span> {n.price}/=
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
