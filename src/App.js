import "./App.css";
import { HOME, NOTHING, ABOUTME, CONTACT, PROJECT } from "./pages";
import { NAV, FOOTER, BLOG } from "./components";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const [DisLoader, setDisLoader] = useState("block");
  const [DisApp, setDisApp] = useState("none");
  const { pathname } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisLoader("none");
      setDisApp("block");
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {" "}
      <div
        className="loader_box"
        style={{
          display: DisLoader,
        }}
      >
        <h1>
          <span> Rawezh</span>
          <span> Rawezh</span>
        </h1>
        <div className="bubbles">
          <div className="bubbles1"></div>
          <div className="bubbles2"></div>
          <div className="bubbles3"></div>
          <div className="bubbles4"></div>
          <div className="bubbles5"></div>
          <div className="bubbles6"></div>
        </div>
      </div>
      <div className="App" style={{ display: DisApp }}>
        <NAV />
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path="/" element={<HOME />} />
            <Route path="*" element={<NOTHING />} />
            <Route path="contact" element={<CONTACT />} />
            <Route path="aboutme" element={<ABOUTME />} />
            <Route path="projects" element={<PROJECT />} />
            <Route path="projects" element={<PROJECT />} />
            <Route path="blog" element={<BLOG />} />
          </Routes>
        </AnimatePresence>
        <FOOTER />
      </div>
    </>
  );
}

export default App;
