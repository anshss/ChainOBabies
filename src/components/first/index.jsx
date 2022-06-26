import React from "react";
import "./index.scss";
import Cake from "./cakex.png";
import ReactFloaterJs from "react-floaterjs";
import { Link } from "react-router-dom";

const First = () => {
  return (
    <div className="first">
      <h2 className="logotext">CHAIN O' BABIES</h2>
      <div className="section1">
        <div className="textdiv">
          <h3>
            May the birth of your children open up a whole new world of
            adventure, lightness, and wonder. Many congratulations of the
            arrival of your beautiful baby. Record this day with us to keep it
            alive forever.
          </h3>
        </div>
        <div className="imgdiv">
          <ReactFloaterJs>
            <img src={Cake} />
          </ReactFloaterJs>
        </div>
      </div>
      <div className="section2">
        <Link to="/getstarted" className="slide btndiv">
          Click Here To Register
        </Link>
      </div>
    </div>
  );
};

export default First;
