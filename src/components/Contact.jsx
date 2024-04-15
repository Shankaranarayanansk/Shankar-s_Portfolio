import React, { createElement,useRef } from "react";
import { content } from "../Content";
import Swal from "sweetalert2";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxhO2RTBpFwsA0zCOpsJqyOvBGE60VkWnYffKcfF_8ujk3-pXx-jZVKQ0lIW7q0vYQj/exec",
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Thanks for your response!",
          customClass: {
            popup: "bw",
          },
        });
        form.current.reset();
      } else {
        console.error("Error submitting form. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: error.message,
      });
    }
  };

  return (
    <section className="bg-dark_primary text-white" id="contact">
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={form}
            onSubmit={handleSubmit}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="number"
              name="number"
              placeholder="Mobile Number"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44"
              required
            ></textarea>
            <button className="btn self-start bg-white text-dark_primary">
              Submit
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {/* Social media links */}
            <div className="flex flex-col gap-5">
              {Contact.social_media.map((content, i) => (
                <div
                  key={i}
                  data-aos="fade-down"
                  data-aos-delay={i * 430}
                  className="flex items-center gap-2"
                >
                  <h4 className="text-white">{createElement(content.icon)}</h4>
                  <a
                    className="font-Poppins"
                    href={content.link}
                    target="_blank"
                  >
                    {content.text}
                  </a>
                </div>
              ))}
            </div>
            {/* Location Map */}
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.5886295658634!2d77.74936137587113!3d8.730553993587494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b040e04066cfb0d%3A0xd51046a4894522a!2s21st%20St%2C%20Shanthi%20Nagar%2C%20Tirunelveli%2C%20Tamil%20Nadu%20627002!5e0!3m2!1sen!2sin!4v1707030170965!5m2!1sen!2sin"
              width="300"
              height="300"
              loading="lazy"
              className="rounded"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;