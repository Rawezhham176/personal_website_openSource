import React from "react";
import { Projects } from "../styles";
import { Github } from "../components";
import { motion } from "framer-motion";

const PROJECTS = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Github />
        <div className="project_box"></div>
      </motion.div>
    </>
  );
};

export default PROJECTS;
