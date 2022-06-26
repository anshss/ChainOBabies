import React from "react";
import Popup from "../components/Popup";
import "./index.scss";
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
                    <div class="flex flex-col h-screen justify-center">
                        <h1 className="text-xl text-gray-900 -mt-6 font-bold text-center">
                            ENTER YOUR DETAILS
                        </h1>
                        <div className="flex gap-6">
                            <TextField
                                required
                                className="bg-[#ecd1e5] w-[18rem]"
                                id="father_name"
                                label="Parent name"
                                defaultValue=""
                            />
                            <TextField
                                className="bg-[#ecd1e5] w-[18rem] "
                                id="mother_name"
                                label="Parent name"
                                defaultValue=""
                            />
                        </div>
                        <div className="flex mt-12 gap-6 input">
                            <TextField
                                required
                                className="bg-[#ecd1e5] w-[18rem]"
                                id="child_name"
                                label="Child name"
                                defaultValue=""
                            />

                            <TextField
                                id="date"
                                className="w-[18rem]"
                                label="Birth Date"
                                type="date"
                                defaultValue="2022-06-26"
                                sx={{ width: 220 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <div className="mt-12">
                            <TextField
                                required
                                className="bg-[#ecd1e5]  w-[40rem]"
                                id="birth_certificate"
                                label="Birth certificate number"
                                defaultValue=""
                            />
                        </div>
                        <button type="submit" class="btn">
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
