import Hero_person from "./assets/images/Hero/perons1.png";
import figma from "./assets/images/Skills/figma.png";
import Git from "./assets/images/Skills/git.jpg";
import db from "./assets/images/Skills/Mongo.png";
import gpt from "./assets/images/Skills/gpt.png";
import sql from "./assets/images/Skills/sql.png";
import HTML from "./assets/images/Skills/HTML5_badge.png";
import Java from "./assets/images/Skills/java.png";
import JS from "./assets/images/Skills/javascript.png";
import node from "./assets/images/Skills/node.png";
import css from "./assets/images/Skills/tailwind.png";
import cs from "./assets/images/Skills/CSS.jpg";
import react from "./assets/images/Skills/react.png";
import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.jpg";
import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/prj3.jpg";
import project4 from "./assets/images/projects/prj4.png";
import project5 from "./assets/images/projects/prj5.png";
import person_project from "./assets/images/projects/person_project.png";
import IBM from "./assets/images/Certification/SQL.jpg";
import Tailwind from "./assets/images/Certification/Tailwind.jpg";
import ES from "./assets/images/Certification/Embedded System.jpg";
import java from "./assets/images/Certification/Java.jpg";
import js from "./assets/images/Certification/JS.jpg";
import Nw from "./assets/images/Certification/Networking.jpg";
import Hireme_person1 from "./assets/images/Hireme/person1.png";
import Hireme_person2 from "./assets/images/Hireme/person2.jpg";
import { GrMail } from "react-icons/gr";
import { MdArrowForward } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiSolidYinYang } from "react-icons/bi";
import { GrCertificate } from "react-icons/gr";
// import { FaHireAHelper } from "react-icons/fa6";
import { BiWrench , BiSolidContact }  from "react-icons/bi";
export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiSolidYinYang,
    },
    {
      link: "#services",
      icon: BiWrench,
    },
    {
      link: "#certificate",
      icon:GrCertificate,
    },
    {
      link: "#contact",
      icon: BiSolidContact,
    },
   
   
  ],
  hero: {
    firstName: "Shankar",
    LastName: "Developer",
    btnText: "Say Hello",
    image: Hero_person,
    hero_content: [
      {
        count: "8",
        text: "Skills in Web development",
      },
      {
        count: "20",
        text: "Projects enhanced my web development skills in my non-academic time ",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "Technologies I use",
    skills_content: [
      {
        name: "HTML5",
        para: "Expert",
        logo: HTML,
        skills: [
          "HTML fundamentals: Understanding tags, attributes, and elements.",
          "Structuring content with semantic HTML: divs, headers, paragraphs.",
          "Creating forms for user input: text fields, buttons, and dropdowns.",
          "Embedding multimedia: images, videos, and audio files.",
          "Implementing hyperlinks for navigation and accessibility.",
        ],
      },
      {
        name: "CSS3",
        para: "Intermediate",
        logo: cs,
        skills: [
          "Styling with CSS properties and selectors.",
          "Layouts: Flexbox and Grid.",
          "Responsive design with media queries.",
          "Animations and transitions.",
        ],
      },
      {
        name: "Tailwind CSS",
        para: "Intermediate",
        logo: css,
        skills: [
          "Rapid UI development with utility classes.",
          "Responsive design using Tailwind's responsive breakpoints.",
          "Customizing designs with Tailwind configuration.",
          "Optimizing performance with PurgeCSS.",
        ],
      },
      {
        name: "JavaScript",
        para: "Expert",
        logo: JS,
        skills: [
          "Core concepts: variables, data types, operators.",
          "Control flow: loops and conditionals.",
          "Functions and scope.",
          "DOM manipulation and event handling.",
          "ES6+ features: arrow functions, destructuring, spread/rest operators.",
        ],
      },
      {
        name: "React JS",
        para: "Expert",
        logo: react,
        skills: [
          "Building user interfaces with React components.",
          "State management with React Hooks and Context API.",
          "Handling routing with React Router.",
          "Integration with backend APIs using axios or fetch.",
        ],
      },
      {
        name: "Node JS",
        para: "Intermediate",
        logo: node,
        skills: [
          "Building server-side applications with JavaScript.",
          "Using npm for package management.",
          "Creating RESTful APIs with Express.js.",
          "Handling asynchronous operations with callbacks, promises, and async/await.",
        ],
      },
      {
        name: "Mongo DB",
        para: "Beginner",
        logo: db,
        skills: [
          "Document-based NoSQL database.",
          "CRUD operations with MongoDB.",
          "Data modeling using Mongoose.",
          "Aggregation framework for complex queries.",
        ],
      },
      {
        name: "Java",
        para: "Intermediate",
        logo: Java,
        skills: [
          "Object-oriented programming concepts: classes, objects, inheritance.",
          "Exception handling and multithreading.",
          "Java Collections framework for data manipulation.",
          "Working with databases using JDBC.",
        ],
      },
      {
        name: "MySQL",
        para: "Intermediate",
        logo: sql,
        skills: [
          "Relational database management system.",
          "Creating and managing databases, tables, and indexes.",
          "SQL queries for data retrieval, manipulation, and aggregation.",
          "Database normalization and optimization.",
        ],
      },
      {
        name: "AI Prompts",
        para: "Expert",
        logo: gpt,
        skills: [
          "Natural Language Processing (NLP) with OpenAI's GPT models.",
          "Creating conversational agents.",
          "Text generation and understanding.",
          "Integration with messaging platforms and applications.",
        ],
      },
      {
        name: "Figma",
        para: "Beginner",
        logo: figma,
        skills: [
          "UI/UX design tool for creating digital prototypes.",
          "Collaborative design with team members.",
          "Creating design systems and component libraries.",
          "Prototyping and sharing designs for feedback.",
        ],
      },
      {
        name: "GitHub",
        para: "Intermediate",
        logo: Git,
        skills: [
          "Version control with Git.",
          "Collaborative development with GitHub.",
          "Branching, merging, and pull requests.",
          "Managing issues and project boards.",
        ],
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "WordPress Websites",
        para: "As a WordPress UI designer, I specialize in creating visually stunning and user-friendly websites tailored to meet your unique needs. Leveraging the flexibility of WordPress and my expertise in UI design, I craft engaging interfaces that captivate visitors and drive engagement. From customizing themes to optimizing user flows, I ensure your WordPress website not only looks great but also delivers an exceptional user experience across devices. With a keen eye for detail and a passion for innovation, I'm committed to bringing your vision to life on the WordPress platform.",
        logo: services_logo3,
      },
      {
        title: "Full Stack Web App",
        para: "Elevate your online presence with a sophisticated portfolio web application, meticulously crafted to showcase your professional journey, skills, and achievements. Through a seamless blend of elegant design and interactive features, this platform offers a captivating glimpse into your expertise and past projects, empowering you to make a lasting impression on potential employers or clients. With customizable elements and a user-friendly interface, your portfolio becomes a dynamic reflection of your talents, inviting visitors to explore and engage with your unique story and capabilities",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "Crafting user-centric designs with a focus on simplicity and clarity, I specialize in creating intuitive user interfaces that elevate user experiences. Proficient in utilizing Figma's powerful tools, I design visually appealing layouts and prototypes that seamlessly blend aesthetics with functionality. From wireframes to polished designs, I strive to deliver impactful solutions that resonate with users and effectively communicate your brand's message.",
        logo: services_logo2,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Portfolio For My Aptitude Trainer (React+Tailwind)",
        image: project1,
        livePreviewUrl: "https://ahamedaptitudetrainer.vercel.app/",
        githubUrl: "https://github.com/Shankaranarayanansk/Client_Ahamed_Port.git",
      },
      {
        title: "Tesla_car_site_Clone",
        image: project2,
        livePreviewUrl: "https://tesla-site-tailwind-css.vercel.app/",
        githubUrl: "project_1_github_url",
      },
      {
        title: "1 to 1 Video Call React+Zeegocloud",
        image: project3,
        livePreviewUrl: "project_1_live_preview_url",
        githubUrl: "project_1_github_url",
      },
      {
        title: "Crytocurrency Tracker (React+Coin Gekco API)",
        image: project4,
        livePreviewUrl: "https://cryto-tracker-shankaranarayanansk.vercel.app/",
        githubUrl: "https://github.com/Shankaranarayanansk/Crytocurrency_Tracker.git",
      },
      {
        title: "Budget Manager (React + Local Storage)",
        image: project5,
        livePreviewUrl: "https://budget-manger-shankaranarayanansk.vercel.app/",
        githubUrl: "https://github.com/Shankaranarayanansk/Budget_Monitor.git",
      },
    ],
  },
  Certificate: {
    title: "Certifications",
    subtitle: "I'm Certified as",
    Certificate_content: [
      {
        review:
          "“Certified in embedded systems and equipped with the skills to design, develop, and optimize. Ready to bring innovative solutions to complex problems, ensuring efficiency and performance in every project. Let's collaborate!”",
        img: ES,
        name: "Intrainz Industrial Training",
      },
      {
        review:
          "“Java certified and equipped with the skills to design, develop, and optimize. Ready to bring innovative solutions to complex problems, ensuring efficiency and performance in every project. Let's collaborate!”",
        img: java,
        name: "NPTEL",
      },
      {
        review:
          "“Certified in SQL with expertise in database design, development, and optimization. Ready to deliver innovative solutions to complex data challenges, ensuring data integrity and performance. Let's work together!”",
        img: IBM,
        name: "IBM Cognitive Class",
      },
      {
        review:
          "“Tailwind CSS certified and proficient in crafting responsive, modern, and efficient designs. Ready to transform your web projects with clean, maintainable, and scalable styles. Let's create something amazing together!”",
        img: Tailwind,
        name: "Udemy Learning Platform",
      },
      {
        review:
          "“Networking essentials certified, skilled in designing, configuring, and troubleshooting networks. Ready to optimize connectivity, security, and performance for your infrastructure. Let's build robust networks together!”",
        img: Nw,
        name: "Cisco Networking Academy",
      },
      {
        review:
          "“JavaScript certified, adept at crafting dynamic and interactive web solutions. Ready to innovate with clean, efficient, and scalable code. Let's create engaging experiences together!”",
        img: js,
        name: "Udemy Learning Platform",
      },
    ],
},


  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person1,
    image2: Hireme_person2,
    para: "Passionate Full Stack Developer Shankaranarayanan, currently in the final year of pursuing B.Tech in IT, adept at crafting seamless digital experiences. Proficient in front-end and back-end technologies, I specialize in dynamic web applications tailored to your needs. With a keen eye for detail, I deliver high-quality, scalable solutions that exceed expectations. Prioritizing user-centric design, I ensure intuitive interfaces that drive engagement. Agile methodology ensures flexibility and timely delivery, while robust security measures protect data integrity. Open communication and collaboration guarantee the final product aligns with your vision. Ongoing support post-project ensures continued success. Let's innovate and grow your business together.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "sankaranarayananit002@gmail.com",
        icon: GrMail,
        link: "mailto:sankaranarayananit002@gmail.com",
      },
      {
        text: "+91 9360482313",
        icon: BsWhatsapp,
        link: "https://wa.me/9360482313",
      },
     
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2024",
  },
};