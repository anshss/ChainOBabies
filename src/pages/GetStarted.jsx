import React from "react";
import Popup from "../components/Popup";

function GetStarted() {
  const [showPopup, setShowPopup] = React.useState(false);
  const handelSubmit = (e) => {
    e.preventDefault();
    setShowPopup(!showPopup);
  };

  return (
    <div className="flex justify-center items-center">
      {showPopup && <Popup />}
      <form onSubmit={handelSubmit}>
        <div class="flex flex-col items-center h-screen justify-center">
          <h1 className="text-xl text-gray-900 -mt-6 font-bold text-center">
            Enter your Details
          </h1>
          <div className="flex justify-center gap-24">
            <div>
              <label
                for="father_name"
                class="block mb-px text-center text-sm font-medium text-gray-900 "
              >
                Father Name
              </label>
              <input
                type="text"
                id="father_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                placeholder="Father name"
                required
              />
            </div>
            <div>
              <label
                for="mother_name"
                class="block mb-px text-center text-sm font-medium text-gray-900"
              >
                Mother's Name
              </label>
              <input
                type="text"
                id="last_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Mother's name"
                required
              />
            </div>
          </div>
          <div>
            <label
              for="child_name"
              class="block mb-px text-center text-sm font-medium text-gray-900 "
            >
              Child name
            </label>
            <input
              type="text"
              id="child_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="Father name"
              required
            />
          </div>
          <div>
            <label
              for="child_dob"
              class="block mb-px mt-1 text-center text-sm font-medium text-gray-900 "
            >
              Child Date of Birth
            </label>
            <input
              type="date"
              id="child_dob"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="Child dob"
              required
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
    </div>
  );
}

export default GetStarted;
