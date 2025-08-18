"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRouter } from "next/navigation";

gsap.registerPlugin(SplitText);

const Loading = () => {
  const textref = useRef(null);
  const router = useRouter();

  useGSAP(() => {
    // Create SplitText after the element exists
    const split = new SplitText(textref.current, { type: "chars, words, lines" });

    const tl = gsap.timeline();
    tl.fromTo("#line1", { height: "0vh" }, { height: "90vh", duration: 1 })
      .fromTo(
        "#line2",
        { width: "0%" },
        { width: "100%", duration: 1 },
        "-=0.5"
      )
      .fromTo(
        "#circle",
        { width: "0%", height: "100vh" },
        {
          borderRadius: 0,
          width: "100%",
          duration: 1,
          ease: "power1.in",
        },
        "-=0.5"
      )
      .fromTo(
        "#text",
        { opacity: 0, fontSize: 30 },
        { opacity: 1, duration: 1, fontSize: 80 },
        "-=0.5"
      )
      .fromTo(
        split.words,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          autoAlpha: 1,
          stagger: 0.05,
          duration: 0.6,
          ease: "power2.inOut",
        },
        "-=0.5"
      )
      .fromTo(
        "#mainloadingbox",
        { scale: 1 },
        { scale: 110, autoAlpha: 0, right : '-100vh' ,   duration: 3, ease: "expo.inOut" , onStart:()=>{
          setTimeout(() => {
            router.push("/pages/Home");
          }, 1000);
        } } 
      )
  }, []);

  return (
    <div
      id="mainloadingbox"
      className="flex items-center justify-center h-[100vh] dark relative overflow-hidden "
    >
      <div className="w-[95%] h-[90vh] flex justify-between relative overflow-hidden">
        <div
          id="circle"
          className="light shadowinset flex flex-col items-center justify-center z-50"
        >
          <div className="flex items-center justify-center text-3xl">
            <h2 id="text">MR </h2>
            <h2 id="text"> DEV</h2>
          </div>
          <h5 id="text2" className=" text-center " ref={textref}>
            Full-Stack Developer | Building Web Experiences
          </h5>
        </div>

        {/* Top-Left Line */}
        <div id="line1" className="border-l-2 absolute top-0 left-0"></div>
        {/* Bottom-Right Line */}
        <div id="line1" className="border-r-2 absolute bottom-0 right-0"></div>

        {/* Top-Right Line */}
        <div id="line2" className="border-b-2 absolute top-0 right-0"></div>
        {/* Bottom-Left Line */}
        <div id="line2" className="border-t-2 absolute bottom-0 left-0 "></div>
      </div>
    </div>
  );
};

export default Loading;
