import React from "react";
import Popup from "../components/Popup";
import "./index.css";
import { TextField } from "@mui/material";

function GetStarted() {
  const [showPopup, setShowPopup] = React.useState(false);
  const handelSubmit = (e) => {
    e.preventDefault();
    setShowPopup(!showPopup);
  };

  return (
    <div className="w-full h-screen bg-gradient-to-tr from-[#f0d7eb] to-[#ddafd3] via-[#ebcbe3]">
      <div className="flex justify-center items-center">
        {showPopup && <Popup />}
        <form onSubmit={handelSubmit}>
          <div class="flex flex-col items-center h-screen justify-center">
            <h1 className="text-xl text-gray-900 -mt-6 font-bold text-center">
              Enter your Details
            </h1>
            <div className="flex justify-center gap-6">
              <TextField
                required
                className="bg-gray-50 border-none !focus:ring-none"
                id="father_name"
                label="Father name"
                defaultValue=""
              />
              <TextField
                required
                className="bg-gray-50 rounded-md"
                id="mother_name"
                label="Mother name"
                defaultValue=""
              />
            </div>
            <div className="flex mt-6 gap-6">
              <TextField
                required
                className="bg-gray-50"
                id="child_name"
                label="Child name"
                defaultValue=""
              />

              <TextField
                id="date"
                className="bg-gray-50 text-gray-200 placeholder:bg-gray-500"
                label="Birthday"
                type="date"
                defaultValue=""
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className="mt-5">
              <TextField
                required
                className="bg-gray-50 w-[465px]"
                id="birth_certificate"
                label="Birth certificate number"
                defaultValue=""
              />
            </div>
            <button
              type="submit"
              class="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
        <div class="alan-btn"></div>
      </div>
    </div>
  );
}

export default GetStarted;
