import React from "react";
import { Aboutme } from "../styles";
import { Rawezh } from "../images";
import { motion } from "framer-motion";

const ABOUTME = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="about_box">
          <div className="about_1">
            <ul>
              <li>
                <h1>
                  <span>We are creating the feture.</span>
                </h1>
              </li>
            </ul>

            <p>
              There so many thing i will do in life.. When we are on your side,
              you will rise up. It is not about to build something. It is about
              you
            </p>
          </div>

          <div className="about_box_display">
            <img src={Rawezh} alt="" />
            <p>
              My name is rawezh. I am 25 years old and live in Hamburg. At the
              moment I am doing an apprenticeship as a software engineer. Before
              this education I studied graphic design and a little bit
              journalism. I already have experience with many programming
              languages like Java, Kotlin, Swift, C#, C, Java Script. On the
              side, I spend my time designing as a ui/ux designer and love to
              write and make music. I love meeting new people, nature, animals
              and of course my job.
            </p>
          </div>

          <div className="about_2">
            <ul>
              <li>
                <h1>
                  <span>We are creating the feture.</span>
                </h1>
              </li>
            </ul>

            <p>
              There so many thing i will do in life.. When we are on your side,
              you will rise up. It is not about to build something. It is about
              you
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ABOUTME;
