"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import assets from "../assets/assets";
import { IoCloseOutline, IoMenu, IoMoon, IoSunny } from "react-icons/io5";
import { CiMedicalCross } from "react-icons/ci";
import Link from "next/link";
import { SplitText } from "gsap/SplitText"; // Import correctly
import { toggleTheme } from "@/app/redux/slice";
import { useDispatch, useSelector } from "react-redux";
import Cursor from "./Cursor";
gsap.registerPlugin(SplitText); // ✅ Register the plugin

const Header = () => {
  const dispatch = useDispatch();
  const splitRefs = useRef([]); // store SplitText instances
  const theme = useSelector((state) => state.theme.theme);
  const [images, setimages] = useState(assets.images.layingman);
  const [menu, setmenu] = useState(false);

  const ontoggle = (e) => {
    setmenu(e);
    const tl = gsap.timeline();
    if (e) {
      tl.fromTo(
        "#menubox",
        { width: 0, height: "100%" },
        { width: "100%", height: "100%", duration: 0.8 }
      ).fromTo(
        ".pages",
        { x: -300 },
        { x: 0, duration: 1, stagger: 0.3, ease: "sine" }
      );
      document.querySelectorAll(".pages").forEach((el, i) => {
        splitRefs.current[i] = new SplitText(el, { type: "chars, words" });
      });
    } else {
      tl.fromTo(
        "#menubox",
        {
          width: "100%",
          height: "100%",
        },
        { width: "0", height: "100%", duration: 0.8 }
      );
    }
  };

  // if(theme == "light"){
  //   gsap.fromTo("home", { backgroundColor: "#1E2D40" }, { backgroundColor: "#AA", duration: 1 });
  // }

  useGSAP(() => {
    gsap.fromTo(
      "#logo , #name , #theme ,#menu",
      { y: -100 },
      { y: 0, duration: 1, stagger: 0.3, ease: "sine" }
    );
  }, []);

  const menuenteranimation = (index) => {
    gsap.to(splitRefs.current[index].chars, {
      color: theme === "light" ? "#1E2D40" : "#02F8BE",
      duration: 0.2,
      stagger: 0.1,
    });

    if (index === 0) {
      setimages(assets.images.Home);
      gsap.fromTo("#image", { height: 0 }, { height: 450, duration: 1 });
    } else if (index === 1) {
      setimages(assets.images.Project);
      gsap.fromTo(
        "#image",
        { height: 0, width: "0%" },
        { height: 450, width: "100%", duration: 1 }
      );
    } else if (index === 2) {
      setimages(assets.images.AboutUs);
      gsap.fromTo("#image", { height: 0 }, { height: 450, duration: 1 });
    } else if (index === 3) {
      gsap.fromTo("#image", { height: 0 }, { height: 450, duration: 1 });
      setimages(assets.images.ContectUS);
    }
  };

  const menuleaveanimation = (index) => {
    gsap.to(splitRefs.current[index].chars, {
      color: theme == "light" ? "#ffffff" : "#1E2D40",
      duration: 0.2,
      stagger: 0.1,
    });
  };

  const [cursorSize, setCursorSize] = useState(8);
  const [cursorActive, setCursorActive] = useState(true);

  return (
    <>
      <div
        id="home"
        className={`${
          theme == "dark" ? "dark" : "light"
        } w-full overflow-hidden `}
      >
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center gap-3">
            <Image
              src={assets.images.logo}
              alt="Company Logo"
              width={70}
              height={70}
              id="logo"
              className=" rounded-md "
            />
            <h1 id="name" className="text-2xl">
              MR DEV
            </h1>
          </div>
          <div className=" flex items-center gap-2  cursor-pointer ">
            {theme == "dark" ? (
              <IoSunny
                size={30}
                id="theme"
                color={`${theme == "dark" ? "#02F8BE" : "#1E2D40"}`}
                onClick={() => {
                  dispatch(toggleTheme());
                  console.log(theme);
                }}
                className=" hover:animate-spin   "
              />
            ) : (
              <IoMoon
                size={25}
                id="theme"
                color={`${theme == "dark" ? "#02F8BE" : "#1E2D40"}`}
                onClick={() => {
                  dispatch(toggleTheme());
                  console.log(theme);
                }}
                className=" hover:animate-pulse "
              />
            )}
            <IoMenu
              size={30}
              id="menu"
              color={`${theme == "dark" ? "#02F8BE" : "#1E2D40"}`}
              onClick={() => {
                ontoggle(true);
              }}
            />
          </div>
        </div>
      </div>

      {/* Menu */}

      <div
        id="menubox"
        className={
          menu == true
            ? `fixed top-0 left-0 ${theme == "dark" ? "dark" : "light"} z-50`
            : "hidden"
        }
      >
        <Cursor size={cursorSize} active={cursorActive} theme={theme} />
        <div className="p-5 flex justify-between">
          <div className="flex flex-col">
            {["Home", "About Me", "Project", "Experience"].map((page, index) => (
              <Link
                href={`#${page}`} // 👈 match your section id
                key={index}
                scroll={false} // prevents full page reload in Next.js
                className={`pages text-5xl mt-6 ${
                  theme == "dark"
                    ? "text-dark-stoke text-[#1E2D40]"
                    : "text-light-stoke text-[#ffffff]"
                } z-50`}
                onMouseEnter={() => {
                  menuenteranimation(index), setCursorSize(10);
                }}
                onMouseLeave={() => menuleaveanimation(index)}
                onClick={(e) => {
                  e.preventDefault();
                  setimages(assets.images.layingman);
                  setmenu(false);
                  document
                    .getElementById(page)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {page}
              </Link>
            ))}
          </div>
          <IoCloseOutline
            color={`${theme == "dark" ? "#02F8BE" : "#1E2D40"}`}
            className="mt-6 hover:animate-spin "
            size={30}
            onMouseEnter={() => {
              setimages(assets.images.By);
            }}
            onMouseLeave={() => {
              setimages(assets.images.layingman);
            }}
            onClick={() => {
              ontoggle(false);
            }}
          />
        </div>

        <div
          className="w-full flex absolute bottom-0  justify-center"
          onMouseEnter={() => {
            setCursorSize(16);
          }}
          onMouseLeave={() => {
            setCursorSize(8);
          }}
        >
          <Image
            src={images}
            alt="Company Logo"
            width={200}
            height={200}
            className={` w-xl   ${theme == "dark" ? "invert" : ""}   `}
            id="image"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
