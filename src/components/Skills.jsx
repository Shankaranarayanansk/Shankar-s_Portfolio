import { useState } from "react";
import { content } from "../Content";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <div className="max-h-[80vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  const openModal = (skill) => {
    setSelectSkill(skill);
    setIsOpen(true);
  };

  return (
    <section className="bg-bg_light_primary py-16" id="skills">
      <Modal isOpen={modalIsOpen} onClose={() => setIsOpen(false)}>
        {selectSkill && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center p-2">
                <img className="w-full h-full object-contain" src={selectSkill.logo} alt="" />
              </div>
              <h3 className="text-lg font-semibold">{selectSkill.name}</h3>
            </div>
            <ul className="ml-5 space-y-2 list-decimal text-sm text-gray-600">
              {selectSkill.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <button 
              onClick={() => setIsOpen(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ml-auto block transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </Modal>

      <div className="md:container px-5 py-10">
        <h2 className="title" data-aos="fade-down">{skills.title}</h2>
        <h4 className="subtitle" data-aos="fade-down">{skills.subtitle}</h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className="bg-white sm:cursor-pointer relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
              onClick={() => openModal(skill)}
            >
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <img
                  src={skill.logo}
                  alt=""
                  className="w-8 h-8 object-contain group-hover:scale-125 duration-200"
                />
              </div>
              <div>
                <h6>{skill.name}</h6>
                <p className="italic">{skill.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;