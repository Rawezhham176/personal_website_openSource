import React from "react";
import { motion } from "framer-motion";

const NOTFOUND = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        Not found!
      </motion.div>
    </div>
  );
};

export default NOTFOUND;
