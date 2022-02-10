import React from "react";
import Footer from "./Footer";
import { useSpring, animated } from "react-spring";
import Titlesection from "./Titlesection";

function HomePage() {
  const animations = useSpring({
    from: {
      opacity: 0,
      marginTop: "-500px",
    },
    to: {
      opacity: 1,
      marginTop: "0px",
    },
    config: {
      Transition: "all 0.1s easeIn",
    },
  });
  return (
  
      <div>
      <animated.div style={animations}>
        <Titlesection />
        <Footer />
    </animated.div>
      </div>
  );
}

export default HomePage;
