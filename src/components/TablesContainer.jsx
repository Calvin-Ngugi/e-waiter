import { motion } from "framer-motion";
import React, { useState } from "react";

const TablesContainer = ({ setTables, tables, setIsSet }) => {
  const [alertStatus, setAlertStatus] = useState("danger");
  const [fields, setFields] = useState(false);
  const [msg, setMsg] = useState(null);

  const saveInfo = () => {
    try {
      if (!tables) {
        setFields(true);
        setMsg("Required field can't be empty");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
        }, 4000);
      } else {
        console.log(tables);
        setIsSet(true);
        setFields(true);
        setMsg("Data Uploaded successfully 😊");
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
        }, 4000);
      }
    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg("Error while uploading : Try AGain 🙇");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
      }, 4000);
    }  
  }

  return (
    <div className="w-full min-h-[300px] flex flex-col items-center justify-center">
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-auto p-2 rounded-lg text-center text-lg font-semibold mb-5 ${
              alertStatus === "danger"
                ? "bg-red-400 text-red-800"
                : "bg-green-400 text-emarald-800"
            }`}
          >
            {msg}
          </motion.p>
        )}
        
      <div>
        <h1 className="text-[1.5rem] font-bold tracking-wide text-headingColor">Input your current table</h1>
        <div className="w-full py-2 border border-gray-900 flex items-center bg-white p-3 rounded-md">
          <input
            required
            type="number"
            placeholder="Input table number"
            value={tables}
            onChange={(e) => setTables(e.target.value)}
            className="w-full h-full text-lg outline-none border-none placeholder:text-gray-400 text-textColor"
          />
        </div>
        <div className="flex items-center w-full">
          <button
            type="button"
            className="ml-0 md:ml-[70px] w-full md:w-auto border-none mt-5 outline-none bg-orange-400 px-12 py-2 rounded-lg text-lg text-black font-semibold"
            onClick={saveInfo}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default TablesContainer;
