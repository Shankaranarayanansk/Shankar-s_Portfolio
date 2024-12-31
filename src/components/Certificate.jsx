import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { useState } from "react";

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-3xl w-full p-6">
        <div className="flex flex-col items-center gap-6">
          <img src={content.img} alt="" className="max-h-[60vh] object-contain" />
          <div className="text-center">
            <p className="text-lg mb-4">{content.review}</p>
            <h6 className="font-semibold">{content.name}</h6>
          </div>
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const Certificate = () => {
  const { Certificate } = content;
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  return (
    <section>
      <Modal 
        isOpen={!!modalContent} 
        onClose={closeModal} 
        content={modalContent}
      />

      <div className="md:container px-5 pt-14" id="certificate">
        <h2 className="title" data-aos="fade-down">{Certificate.title}</h2>
        <h4 className="subtitle" data-aos="fade-down">{Certificate.subtitle}</h4>
        <br />
        <Swiper
          direction={"vertical"}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          data-aos="fade-up"
          loop={true}
          spaceBetween={40}
          slidesPerView={1.7}
          onSlideChange={(e) => setActiveIndex(e.realIndex)}
          modules={[Pagination, Autoplay]}
          className="md:h-96 h-[40rem] max-w-3xl"
        >
          {Certificate.Certificate_content.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className={`duration-500 bg-bg_light_primary mx-8 border-2 
                  p-8 h-full rounded-2xl flex items-center gap-6
                  border-slate-200 md:flex-row flex-col cursor-pointer
                  ${activeIndex !== i && "scale-75 blur-sm"}`}
                onClick={() => openModal(content)}
              >
                <img src={content.img} alt="" className="h-24" />
                <div>
                  <p className="sm:text-base text-sm">{content.review}</p>
                  <br />
                  <h6>{content.name}</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Certificate;