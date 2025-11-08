"use client";
import React from "react";
import Image from "next/image";
import assets from "@/app/assets/assets";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import {
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiReactos,
} from "react-icons/si";
import { FaCamera } from "react-icons/fa";

const ProjectSlider = () => {
  const theme = useSelector((state) => state.theme.theme);

  const projects = [
    {
      title: "Cargo App",
      description: "Frontend React Native app with camera plugin",
      link: "https://github.com/MudassarRassol/CarGoFrontend",
      tech: [
        { name: "React Native", icon: <SiReactos className="text-blue-600 w-6 h-6" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 w-6 h-6" /> },
        { name: "Camera Plugin", icon: <FaCamera className="text-gray-800 w-6 h-6" /> },
      ],
      image: assets.images.CarP,
      fullStack: false,
    },
    {
      title: "Book Donation",
      description: "A full-stack book donation platform",
      link: "http://book-donation-orcin.vercel.app/",
      tech: [
        { name: "React", icon: <SiReact className="text-blue-500 w-6 h-6" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black w-6 h-6" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600 w-6 h-6" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 w-6 h-6" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500 w-6 h-6" /> },
        { name: "Express", icon: <SiExpress className="text-gray-700 w-6 h-6" /> },
      ],
      image: assets.images.BookP,
      fullStack: true,
    },
    {
      title: "Medical inventory management",
      description: "A full-stack Medical inventory management platform",
      link: "https://new-day-kappa.vercel.app/",
      tech: [
        { name: "React", icon: <SiReact className="text-blue-500 w-6 h-6" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black w-6 h-6" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600 w-6 h-6" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 w-6 h-6" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500 w-6 h-6" /> },
        { name: "Express", icon: <SiExpress className="text-gray-700 w-6 h-6" /> },
      ],
      image: assets.images.MedicalP.png,
      fullStack: true,
    },
  ];

  return (
    <div className={`px-4 md:py-5 md:px-5 ${theme === "light" ? "light" : "dark"}`}>
      <h1 className="text-5xl hover:underline hover:underline-offset-8 mb-10">Project</h1>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {projects.map((project, idx) => (
          <SwiperSlide key={idx} className=" cursor-grab  " >
            <div className="flex flex-col md:flex-row gap-6 pb-4 justify-between border-b-[0.4] border-gray-400  ">
              <div className="flex flex-col gap-4 mt-5">
                <h1 className="text-2xl">{project.title}</h1>
                <p>{project.description}</p>
                <div className="flex flex-wrap md:flex-col  gap-3 mt-2">
                  {project.tech.map((tech, i) => (
                    <div key={i} className="flex items-center text-sm gap-2">
                      {tech.icon}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a href={project.link} target="_blank">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={800}
                  className="rounded-2xl md:rounded-4xl mt-5 md:mt-0 aspect-video object-cover "
                />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectSlider;
