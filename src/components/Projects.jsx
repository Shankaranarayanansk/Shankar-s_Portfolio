import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { FaGithub,FaPlay } from 'react-icons/fa'; // Import GitHub icon from Font Awesome

const Projects = () => {
  const { Projects } = content;

  const handleGitHubButtonClick = (url) => {
    window.open(url, "_blank");
  };

  const handleLivePreviewButtonClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem]"
          />
          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000, // Adjust the delay as needed
              disableOnInteraction: false, // Allow autoplay to continue after user interactions
            }}
            loop={true}
            spaceBetween={20}
            modules={[Pagination, Autoplay]}
            className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
            data-aos="fade-left"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src={content.image} alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <div className="flex gap-3 mt-2">
                    <button className="font-bold text-gray" onClick={() => handleLivePreviewButtonClick(content.livePreviewUrl)}>
                      <FaPlay className="inline-block mr-1" />Live Demo
                    </button>
                    <button className="font-bold text-gray" onClick={() => handleGitHubButtonClick(content.githubUrl)}>
                      <FaGithub className="inline-block mr-1" /> Github
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;