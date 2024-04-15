import { useState, useEffect } from "react";
import { content } from "../Content";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"; 
import { BiSolidShareAlt } from "react-icons/bi";

const Hero = () => {
  const { hero } = content;
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Adjust threshold as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
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
            <BiSolidShareAlt size={34} />
          </div>
          {isMobileView && (
             <h1 className={`rotate-90 absolute ${isMobileView ? "top-[20%] right-[-45%]" : "top-[40%] right-[-50%]"} text-dark_primary ${isMobileView ? "md:hidden" : "hidden md:block"}`}>
             {hero.firstName}{" "}
 <span className="text-[#EAF2FA] ">{hero.LastName}</span>
           </h1>
   
          )}
         
        </div>

        {/* First Column */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2>{hero.title}</h2>
          <br />
          <div className="flex items-center gap-5">
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a href="https://www.instagram.com/bruceleeshankar202/" target="_blank" rel="noopener noreferrer"><FaInstagram size={30}/></a>
              <a href="https://github.com/Shankaranarayanansk/" target="_blank" rel="noopener noreferrer"><FaGithub size={30}/></a>
              <a href="https://www.linkedin.com/in/shankaranarayanansk/?originalSubdomain=in" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
            </div>
            <button className="btn" onClick={scrollToContact}>{hero.btnText}</button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5 ${i === 1 && "flex-row-reverse text-right"}`}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Column */}
        <div className="md:h-[37rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
