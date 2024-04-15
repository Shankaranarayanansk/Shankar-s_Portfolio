import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";

function App() {
  const [sec, setSec] = useState(0);
  const [vis, setVis] = useState(false);
  const [show, setShow] = useState(true); // Set show to true initially

  useEffect(() => {
    Aos.init({
      duration: 2000,
      offset: 100,
    });

    setShow(true); // Set show to true immediately after initializing AOS

    const intervalId = setInterval(() => {
      setSec((prevSec) => (prevSec < data.length - 1 ? prevSec + 1 : prevSec));
    }, 200);

    setTimeout(() => {
      clearInterval(intervalId);
      setVis(true);
    }, 2600);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const data = ["Hello", "This", "Shankaranarayananask"];

  return (
    <div className="overflow-x-hidden">
      <div
        className={`bg-[#222222] h-screen flex justify-center items-center ${
          vis
            ? "-translate-y-full duration-1000 ease-[cubic-bezier(0.95,0.05,0.795,0.035)]"
            : ""
        } ${show ? "hidden" : ""}`}
      >
        <span className="p-1 bg-white rounded-full"></span>
        <div className="px-4 text-white text-[40px]">{data[sec]}</div>
      </div>
      <div>
        <Navbar />
        <Hero />
        <Skills />
        <Service />
        <Projects />
        <Hireme />
        <Contact />
        <Cursor />
        <footer className="p-3 text-center">
          <h6 className="mb-3">Shankar Dev</h6>
          <p>shankaranarayanansk© All CopyRights Reserved 2024</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
