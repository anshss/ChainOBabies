import GetStarted from "./pages/GetStarted2";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from "react";
import LandingPage from "./pages/landingPage";
import { Route, Routes, useNavigate } from "react-router-dom";

const ALAN_STUDIO_API_KEY =
  "f039e00acc09bb6be6f0bf4fca3358f52e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  const navigate = useNavigate();
  var greetingWasSaid = false;
  useEffect(() => {
    var alanBtnInstance = alanBtn({
      key: ALAN_STUDIO_API_KEY,
      onButtonState: async function (status) {
        if (status === "ONLINE") {
          if (!this.greetingWasSaid) {
            await alanBtnInstance.activate();
            const isdone = alanBtnInstance.playText(
              "Welcome to CHAIN'O BABIES, Click on the mic button below if you need my help."
            );
            this.greetingWasSaid = true;
          }
        }
      },
      onCommand: ({ command }) => {
        if (command === "testCommand") {
          alert("This commnad was executed sucessfully");
        }
        if (command === "go:back") {
          navigate(-1);
        }
        if (command === "get:started") {
          navigate("/getstarted");
        }
      },
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/getstarted" element={<GetStarted />} />
      </Routes>
    </div>
  );
}

export default App;
