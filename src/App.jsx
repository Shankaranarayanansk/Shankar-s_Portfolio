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
import Certificate from "./components/Certificate";
import Offline from "./components/Offline";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  const [sec, setSec] = useState(0);
  const [vis, setVis] = useState(false);
  const [show, setShow] = useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  const data = [
    "Hello",
    "This",
    "is",
    "Aspiring",
    "Developer",
    "Shankaranarayanansk",
  ];
  const data2 = ["Hello", "This", "is", "Aspiring", "Developer", "Shankar"];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initialize resize listener
    window.addEventListener("resize", handleResize);

    // Get current data based on screen size
    const currentData = isMobile ? data2 : data;

    // Initialize AOS
    Aos.init({
      duration: 2000,
      offset: 100,
    });

    // Text animation interval
    const intervalId = setInterval(() => {
      setSec((prevSec) =>
        prevSec < currentData.length - 1 ? prevSec + 1 : prevSec
      );
    }, 600);

    // Animation timers
    const visTimer = setTimeout(() => {
      clearInterval(intervalId);
      setVis(true);
    }, currentData.length * 600 + 100);

    const showTimer = setTimeout(() => {
      setShow(false);
    }, currentData.length * 600 + 1000);

    // Online/Offline handlers
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // GSAP ScrollTrigger animations
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray("[data-scroll]").forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        },
        opacity: 0,
        y: 50,
        duration: 1,
      });
    });

    // Cleanup function
    return () => {
      clearInterval(intervalId);
      clearTimeout(visTimer);
      clearTimeout(showTimer);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [isMobile]); // Re-run effect when mobile state changes

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="overflow-x-hidden">
      {!isOnline ? (
        <Offline />
      ) : (
        <div>
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              particles: {
                number: {
                  value: 100,
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                },
                color: {
                  value: "#ffffff",
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#000000",
                  },
                },
                opacity: {
                  value: 0.6,
                  random: false,
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                  },
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 3,
                    size_min: 1,
                    sync: false,
                  },
                },
                move: {
                  enable: true,
                  speed: 1,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                  },
                },
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: false,
                    mode: "repulse",
                  },
                  onclick: {
                    enable: false,
                    mode: "push",
                  },
                  resize: true,
                },
              },
              retina_detect: true,
            }}
          />
          {show && (
            <div
              className={`bg-primaryLinear h-screen flex justify-center items-center ${
                vis
                  ? "-translate-y-full duration-1000 ease-[cubic-bezier(0.95,0.05,0.795,0.035)]"
                  : ""
              }`}
            >
              <h1
                className="px-4 text-navy-700 text-[70px] font-bold text-center"
                id="opener"
              >
                {isMobile ? data2[sec] : data[sec]}
              </h1>
            </div>
          )}
          {!show && (
            <div>
              <Navbar />
              <Hero />
              <Skills />
              <Service />
              <Projects />
              <Certificate />
              <Hireme />
              <Contact />
              <Cursor />
              <footer className="p-3 text-center">
                <h6 className="mb-3">Shankar Dev</h6>
                <p>shankaranarayanansk© All CopyRights Reserved 2024</p>
              </footer>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;