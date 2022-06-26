import React from "react";
import "./index.scss";
import Card from "./card";
import Alan from "./assets/alanaii.png";
import Twilio from "./assets/twilioo.png";
import Verify from "./assets/verifyy.png";

const Second = () => {
    return (
        <div className="second">

            <Card
                image={Verify}
                content="Register your baby on blockchain! Seems fascinating right? Get this momet live forever with power of smart contract on polygon."
            />
            <Card
                image={Twilio}
                content="Warm greetings every year on this auspicious day of your child's birthday. Twilio makes it possible for us through messages and emails."
            />
            <Card
                image={Alan}
                content="Have a trouble using this website? We have a voice assistant to guide you.  Using Alan AI we have integrated a voice help assistant."
            />
        </div>
    );
};

export default Second;
