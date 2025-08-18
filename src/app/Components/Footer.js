import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
    const theme = useSelector((state) => state.theme.theme);
  return (
    <div>
      {/* Footer / Bottom Header */}
      <footer
        className={`w-full py-6 flex justify-between items-center text-sm px-6 ${
          theme === "light" ? "light" : "dark"
        }`}
      >
        <p className=" text-center w-full ">
          © {new Date().getFullYear()} Mudassar Rasool. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
