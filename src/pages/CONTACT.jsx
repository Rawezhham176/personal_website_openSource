import React from "react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const cors = require("cors")({
  origin: true,
});

const CONTACT = () => {
  const [emaily, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [namy, setName] = useState("");
  const [but, setButton] = useState("SEND");

  const name = useRef(null);
  const email = useRef(null);
  const text = useRef(null);

  function sendEmail(e) {
    e.preventDefault();
    console.log(this.state);
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <form action="" className="contact_box" onSubmit={sendEmail}>
          <h1>Contact me</h1>
          <input
            type="text"
            name=""
            id=""
            placeholder="Name"
            ref={name}
            value={namy}
            onChange={(e) => setName(e.target.value)}
          />
          <input type="text" name="" id="" placeholder="Email" ref={email} />
          <textarea
            cols="30"
            rows="100"
            placeholder="Write me"
            ref={text}
          ></textarea>
          <button type="submit">{but}</button>
        </form>
      </motion.div>
    </div>
  );
};

export default CONTACT;
