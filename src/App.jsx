import GetStarted from "./pages/GetStarted";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from "react";
import LandingPage from "./pages/landingPage";

// alanBtn({
//   key: "ALAN_STUDIO_API_KEY",
//   rootEl: document.getElementById("alan-btn"),
// });

const ALAN_STUDIO_API_KEY =
  "f039e00acc09bb6be6f0bf4fca3358f52e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  useEffect(() => {
    alanBtn({
      key: ALAN_STUDIO_API_KEY,
      onCommand: ({ command }) => {
        if (command === "testCommand") {
          alert("This commnad was executed sucessfully");
        }
      },
    });
  }, []);
  return (
    <div class="">
      <GetStarted />
    </div>
  );
}

export default App;
{
  /* <GetStarted />; */
}
// w-full h-screen bg-gradient-to-tr from-[#f0d7eb] to-[#ddafd3] via-[#ebcbe3]
