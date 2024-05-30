import { content } from "../Content";
import cv from "../assets/My CV.pdf";
const Hireme = () => {
  const { Hireme } = content;
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-bg_light_primary mb-20">
      <div className="md:container px-5 pt-14" id="hire">
        <h2 className="title" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex flex-col items-center md:flex-row md:items-start">
          <img
            src={Hireme.image2}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden mb-9 md:mr-7"
          />
          <img
            src={Hireme.image2}
            data-aos="fade-up"
            alt="..."
            className="max-w-sm md:hidden mb-9 md:ml-10"
          />
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-md p-8 shadow-sm rounded-xl sm:min-w-[50rem]"
          >
            <p className="leading-7">{Hireme.para}</p>
            <br />
            <div className="flex flex-col md:flex-row md:justify-between items-center">
              <button className="btn bg-dark_primary text-white mb-4 md:mb-0" onClick={scrollToContact}>
                {Hireme.btnText}
              </button>
              <a href={cv} download="Shankar's CV" className="btn bg-dark_primary text-white">Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;