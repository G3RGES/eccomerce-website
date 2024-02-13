/* eslint-disable no-unused-vars */
import React from "react";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return <div className="bg-primary">App</div>;
};

export default App;
