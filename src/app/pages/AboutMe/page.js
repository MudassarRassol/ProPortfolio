import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import Cursor from "@/app/Components/Cursor";

// Icons
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiNodedotjs,
  SiExpress,
  SiFigma,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiGit,
  SiGithub,
  SiPostman,
  SiGnubash,
} from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const AboutMe = () => {
  const [size, setsize] = useState("8");

  const skills = [
    {
      title: "Frontend",
      items: [
        { name: "React.js", icon: <SiReact className="text-sky-500" /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        {
          name: "TailwindCSS",
          icon: <SiTailwindcss className="text-sky-400" />,
        },
        { name: "GSAP", icon: <SiJavascript className="text-green-500" /> },
        { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400" />,
        },
        { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
        { name: "Express.js", icon: <SiExpress /> },
        {
          name: "REST APIs",
          icon: <SiJavascript className="text-green-400" />,
        },
      ],
    },
    {
      title: "Databases",
      items: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-blue-600" />,
        },
      ],
    },
    {
      title: "Mobile",
      items: [
        { name: "Redux", icon: <SiRedux className="text-purple-700" /> },
        {
          name: "AsyncStorage",
          icon: <SiJavascript className="text-yellow-400" />,
        },
        {
          name: "React Native CLI",
          icon: <FaMobileAlt className="text-purple-500" />,
        },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Git", icon: <SiGit className="text-orange-600" /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        // { name: "Bash/CLI", icon: <SiGnubash className="text-gray-700" /> },
      ],
    },
  ];

  const data = [
    {
      num: "(01)",
      title: "UI/UX & Frontend Development",
      des: "Frontend is about clarity, speed, and interaction. I craft responsive, user-friendly interfaces that feel natural across devices, focusing on accessibility and smooth experiences.",
      skills: [
        { num: "01", des: "Next.js, React.js, TailwindCSS, GSAP" },
        { num: "02", des: "Figma to Code" },
        { num: "03", des: "HTML, CSS, JavaScript" },
      ],
    },
    {
      num: "(02)",
      title: "Backend Development",
      des: "I build secure, scalable, and high-performance backends that power modern applications. From databases to authentication, I ensure your systems run smoothly and reliably.",
      skills: [
        { num: "01", des: "Node.js, Express.js" },
        { num: "02", des: "MongoDB, PostgreSQL" },
        { num: "03", des: "Authentication & Authorization (JWT, OAuth)" },
      ],
    },
    {
      num: "(03)",
      title: "React Native Mobile Apps",
      des: "I create cross-platform mobile applications with React Native that deliver native-like performance. My apps are optimized, responsive, and designed to provide seamless experiences on both Android and iOS.",
      skills: [
        { num: "01", des: "React Native CLI" },
        { num: "02", des: "Navigation, Redux, AsyncStorage" },
        { num: "03", des: "Camera, Image Uploads, APIs" },
      ],
    },
    {
      num: "(04)",
      title: "Full-Stack Development",
      des: "From frontend interactions to backend APIs, I build complete web solutions. I work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users.",
      skills: [
        { num: "01", des: "React, Node.js, Express.js, Next.js" },
        { num: "02", des: "REST APIs" },
        { num: "03", des: "Git, GitHub, Postman" },
      ],
    },
  ];

  const [cursorSize, setCursorSize] = useState(8);
  const [cursorActive, setCursorActive] = useState(true);
  const theme = useSelector((state) => state.theme.theme);
  const aboutRef = useRef(null);

  useGSAP(() => {
    const split = new SplitText(aboutRef.current, { type: "words,chars" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 70%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    tl.from(split.chars, {
      opacity: 0,
      y: 20,
      stagger: 0.05,
      ease: "sine.out",
    });

    tl.fromTo(
      "#line",
      { width: "0%" },
      { width: "100%", duration: 2, ease: "power1.inOut" },
      "-=1.5"
    );

    data.forEach((el, i) => {
      el.skills.forEach((_, j) => {
        gsap.from(`#skill-${i}-${j}`, {
          opacity: 0,
          x: -50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `#skill-${i}-${j}`,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });
    });
  }, []);

  return (
    <div
      className={` dark rounded-none md:rounded-t-4xl px-5 pt-10 border-t-2 relative  ${
        theme === "dark" ? "dark" : "light"
      }`}
    >
      <Cursor size={cursorSize} active={cursorActive} theme={theme} />

      <h1
        className="text-5xl mb-6"
        onMouseEnter={() => setCursorSize(18)}
        onMouseLeave={() => setCursorSize(8)}
      >
        What I Do /
      </h1>
      <div className="flex justify-end">
        <p
          id="about"
          ref={aboutRef}
          className="max-w-2xl leading-relaxed mt-10 font-serif text-2xl"
          onMouseEnter={() => setCursorSize(18)}
          onMouseLeave={() => setCursorSize(8)}
        >
          I specialize in building full-stack web applications that are fast,
          reliable, and user-friendly. With a solid foundation in both frontend
          and backend technologies, I help bring ideas to life — whether it's
          for a business, a startup, or a product team.
        </p>
      </div>

      <div
        id="line"
        className="mx-auto border-gray-600 border-b rounded-full mt-20"
      ></div>

      {data.map((el, i) => (
        <React.Fragment key={i}>
          <div id={`section-${i}`} className="mt-14">
            <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between relative ">
              <h1
                className="text-5xl font-bold top-20 transition-all duration-300"
                onMouseEnter={() => setCursorSize(16)}
                onMouseLeave={() => setCursorSize(8)}
              >
                {el.num}
              </h1>

              {/* Content */}
              <div
                onMouseEnter={() => setCursorSize(16)}
                onMouseLeave={() => setCursorSize(8)}
              >
                <h1 className="text-4xl">{el.title}</h1>
                <p className="max-w-2xl leading-relaxed font-serif text-2xl my-10">
                  {el.des}
                </p>

                {el.skills.map((skill, j) => (
                  <div
                    key={j}
                    id={`skill-${i}-${j}`}
                    className="flex flex-col font-serif gap-5 border-b border-gray-600 last:border-none pb-4"
                  >
                    <div className="flex gap-10 items-center mt-2">
                      <h1 className="text-xl">{skill.num}</h1>
                      <h1 className="text-3xl">{skill.des}</h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`mx-auto ${
              i <= 3 && " border-gray-600 border-b"
            } rounded-full mt-6 `}
          ></div>
        </React.Fragment>
      ))}
      <h1
        className="text-5xl mt-10 mb-6"
        onMouseEnter={() => setCursorSize(18)}
        onMouseLeave={() => setCursorSize(8)}
      >
        Skills & Technologies
      </h1>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 ">
        {skills.map((cat, i) => (
          <div
            key={i}
            className="
            p-6 
  rounded-2xl 
  border 
  shadow-md hover:shadow-2xl 
  transition-all duration-300 ease-in-out 
  transform-cpu hover:-translate-y-2 
          "
            onMouseEnter={() => setCursorSize(14)}
            onMouseLeave={() => setCursorSize(8)}
          >
            <h2 className="text-xl md:text-2xl  mb-4">{cat.title}</h2>
            <div className="grid grid-cols-2 gap-2">
              {cat.items.map((skill, j) => (
                <div
                  key={j}
                  className="flex items-center  text-lg font-serif gap-2 "
                >
                  <span className=" text-xl md:text-2xl font-serif hover:animate-bounce ">
                    {skill.icon}
                  </span>
                  <span className=" text-sm md:text-xl font-serif ">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div
        id="line"
        className="mx-auto border-gray-600 border-b rounded-full mt-10"
      ></div>
    </div>
  );
};

export default AboutMe;
