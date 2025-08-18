import React from "react";
import { useSelector } from "react-redux";

const Experience = () => {
  const experiences = [
    {
      year: "2023 – 2024",
      title: "Web Developer Internship",
      place: "Learn to Earn",
      description:
        "Worked on an ad-serving platform and managed educational apps with online classrooms.",
    },
    {
      year: "2024",
      title: "Coursera Certificate – HTML & CSS",
      place: "Coursera",
      description:
        "Completed foundational course on building structured, responsive web pages.",
    },
    {
      year: "2025 (4th Semester)",
      title: "Full-Stack Developer – Book Donation Platform",
      place: "College Project",
      description:
        "Developed a full-stack platform for book donations using Next.js, TypeScript, MongoDB, and Tailwind CSS. Authentication, and user-friendly design.",
    },
  ];

  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className={` p-5 ${theme == "light" ? "light" : "dark"}`}>
      <h1 className="text-5xl mb-10">Experience & Certifications</h1>

      <div className="relative border-l  pl-6">
        {experiences.map((exp, i) => (
          <div key={i} className="mb-10 ml-4">
            {/* Dot */}
            <div className="absolute -left-2 w-4 h-4 bg-gray-600 rounded-full border "></div>

            {/* Content */}
            <h2 className="text-xl">{exp.title}</h2>
            <p className="italic  font-serif mt-2 ">
              {exp.place} • {exp.year}
            </p>
            <p className="mt-2 text-md leading-relaxed  font-serif ">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
