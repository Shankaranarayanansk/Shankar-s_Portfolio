import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper core and required modules
import { Pagination, Autoplay } from "swiper";
import { useState } from "react";

const Certificate = () => {
  const { Certificate } = content;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section>
      <div className="md:container px-5 pt-14" id="certificate">
        <h2 className="title" data-aos="fade-down">
          {Certificate.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Certificate.subtitle}
        </h4>
        <br />
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000, // Adjust the delay as needed
            disableOnInteraction: false, // Allow autoplay to continue after user interactions
          }}
          data-aos="fade-up"
          loop={true}
          spaceBetween={40}
          slidesPerView={1.7}
          onSlideChange={(e) => {
            console.log(e.realIndex);
            setActiveIndex(e.realIndex);
          }}
          modules={[Pagination,Autoplay]}
          className="md:h-96 h-[40rem] max-w-3xl"
        >
          {Certificate.Certificate_content.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className={` duration-500 bg-bg_light_primary mx-8 border-2 
              p-8 h-full rounded-2xl flex items-center gap-6
               border-slate-200 md:flex-row flex-col
                ${activeIndex !== i && "scale-75 blur-sm"}`}
              >
                <img src={content.img} alt="..." className="h-24" />
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
// import { content } from "../Content";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination, Autoplay } from "swiper";
// import { useState } from "react";
// import Modal from 'react-modal';

// Modal.setAppElement('#root');

// const Certificate = () => {
//   const { Certificate } = content;
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedImageSrc, setSelectedImageSrc] = useState('');

//   const handleViewClick = (imageSrc) => {
//     setSelectedImageSrc(imageSrc);
//     setIsModalOpen(true);
//   };

//   return (
//     <section>
//       <div className="md:container px-5 pt-14" id="certificate">
//         <h2 className="title" data-aos="fade-down">
//           {Certificate.title}
//         </h2>
//         <h4 className="subtitle" data-aos="fade-down">
//           {Certificate.subtitle}
//         </h4>
//         <br />
//         <Swiper
//           direction={"vertical"}
//           pagination={{
//             clickable: true,
//           }}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           data-aos="fade-up"
//           loop={true}
//           spaceBetween={40}
//           slidesPerView={1.7}
//           onSlideChange={(e) => {
//             setActiveIndex(e.realIndex);
//           }}
//           modules={[Pagination, Autoplay]}
//           className="md:h-96 h-[40rem] max-w-3xl"
//         >
//           {Certificate.Certificate_content.map((content, i) => (
//             <SwiperSlide key={i}>
//               <div
//                 className={`duration-500 bg-bg_light_primary mx-8 border-2 p-8 h-full rounded-2xl flex items-center gap-6 border-slate-200 md:flex-row flex-col ${
//                   activeIndex !== i && "scale-75 blur-sm"
//                 }`}
//               >
//                 <img src={content.img} alt="..." className="h-24" />
//                 <div>
//                   <p className="sm:text-base text-sm">{content.review}</p>
//                   <br />
//                   <h6>{content.name}</h6>
//                   <button onClick={() => handleViewClick(content.img)}>
//                     View
//                   </button>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//       <Modal
//         isOpen={isModalOpen}
//         onRequestClose={() => setIsModalOpen(false)}
//         contentLabel="Image Modal"
//       >
//         <button onClick={() => setIsModalOpen(false)}>Close</button>
//         <img src={selectedImageSrc} alt="Selected Image" />
//       </Modal>
//     </section>
//   );
// };

// export default Certificate;