import React from "react";
import { useSelector } from "react-redux";

const ContectUS = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div
      // ref={contactRef}
      className={`w-full h-auto mt-10  flex flex-col items-center justify-center text-center ${
        theme == "light" ? "light" : "dark"
      }`}
    >
      <h1 className="text-5xl mb-6 font-bold">Get in Touch</h1>
      <p className="mb-8 max-w-xl text-lg font-serif">
        I’d love to hear from you! Whether you have a question, project idea, or
        just want to say hi, feel free to reach out.
      </p>

      {/* Contact Buttons */}
      <div className="flex flex-wrap gap-6 justify-center">
        <a
          href="mailto:mudassardev16@gmail.com"
          className="px-6 py-3 rounded-xl border hover:scale-110 transition duration-300 ease-in-out"
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/mudassar-rasool-b15130300"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl border hover:scale-110 transition duration-300 ease-in-out"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/MudassarRassol"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl border hover:scale-110 transition duration-300 ease-in-out"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ContectUS;
