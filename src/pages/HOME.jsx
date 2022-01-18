import React from "react";
import { Rawi } from "../images";
import { Github, AFTERHEAD, BUBBLES } from "../components";
import { Home } from "../styles";
import { motion } from "framer-motion";

const HOME = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="home">
          <div className="home_text">
            <h1>Hi, I'm</h1>
            <h1>
              <span> Rawezh</span>
              <span> Rawezh</span>
            </h1>
            <p>
              Our work is not about designing something that is like something.
              It's about designing the future. What you get from us, you will
              admire. With long support :)
            </p>
          </div>
          <div className="home_box">
            <div className="rawezh_img">
              <div className="circle"></div>
              <img src={Rawi} alt="rawezh" />
            </div>
          </div>
        </div>

        <AFTERHEAD />
        <BUBBLES />
        <Github />
      </motion.div>
    </>
  );
};

export default HOME;
