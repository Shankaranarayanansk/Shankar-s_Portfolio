import { useState, useEffect } from "react";
import { content } from "../Content";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { BiSolidShareAlt } from "react-icons/bi";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Modal from "react-modal";
import { X } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};

const Hero = () => {
  const { hero } = content;
  const [isMobileView, setIsMobileView] = useState(false);
  const [count, setCount] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleShareClick = () => {
    console.log("handleShareClick called");
    openModal();
  };

  const openModal = () => {
    const currentUrl = window.location.href;
    setShareUrl(currentUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <div className="sm:cursor-pointer fixed top-10 left-20 z-[999] rounded-lg bg-white/40 p-2 hidden lg:block">
            <button onClick={handleShareClick} className="share-button">
              <BiSolidShareAlt size={34} />
            </button>
          </div>
        </div>
        {/* First Column */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <div className="hidden md:block">
            <h2 className="py-10 text-center md:text-left">
              Hi there👋I'm Shankaranarayanansk
            </h2>
          </div>
          <div className="md:hidden">
            <h2 className="py-10 text-center">Hi there👋I'm Shankar</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <h2 className="inline-block min-w-[300px] md:min-w-[500px] text-center md:text-left">
              A Passionate <span></span>
              <span className="relative">
                <Typewriter
                  words={["Full Stack Developer", "Influencer", "Freelancer"]}
                  loop={true}
                  cursor
                  cursorStyle="!"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  className="inline-block"
                />
              </span>
            </h2>
          </div>
          <br />
          <br />
             {/* Social Media Icons */}
          <div className="flex  gap-5 ">
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/bruceleeshankar202/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://github.com/Shankaranarayanansk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/shankaranarayanansk/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
            <button className="btn" onClick={scrollToContact}>
              {hero.btnText}
            </button>
          </div>
          <div className="flex flex-col gap-10 mt-10 ">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5 ${
                  i === 1 && "flex-row-reverse text-right "
                }`}
              >
                <ScrollTrigger
                  onEnter={() => setCount(true)}
                  onExit={() => setCount(false)}
                >
                  <h3>
                    {count && (
                      <CountUp
                        start={0}
                        end={content.count}
                        duration={2}
                        delay={1.5}
                        className="text-5xl font-bold"
                      />
                    )}
                    +
                  </h3>
                </ScrollTrigger>

                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Column */}
        <div className="md:h-[37rem] h-96 ">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="loading"
            className="h-full object-cover"
          />
        </div>
      </div>

      {/* Share Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex flex-col items-center">
          <button onClick={closeModal} className="self-end">
            <X size={24} />
          </button>
          <h2 className="mb-4">Share this page</h2>
          <div className="flex gap-4">
            <EmailShareButton url={shareUrl}>
              <EmailIcon size={32} round />
            </EmailShareButton>
            <FacebookShareButton url={shareUrl}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <WhatsappShareButton url={shareUrl}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default Hero;
