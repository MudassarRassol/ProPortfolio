import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import assets from "@/app/assets/assets";
import Image from "next/image";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const theme = useSelector((state) => state.theme.theme);
  const lightColor = "#f5f5f5";
  const darkColor = "#0f172a";

  const sectionRef = useRef(null);



  // Scroll animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false,
        scrub: true,

        onUpdate: (self) => {
          gsap.to(sectionRef.current, {
            scale: 1 - self.progress,
            rotate: self.progress * 24,
            duration: 1,
            overwrite: "auto",
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // box hover animations
  const startboxanimation = (el) => {
    gsap.to(el, {
      backgroundColor: theme === "light" ? darkColor : "#02F8BE",
      color: theme === "light" ? lightColor : darkColor,
      duration: 0.2,
      stagger: 0.1,
      ease: "elastic",
    });
  };

  const startboxanimationleave = (el) => {
    gsap.to(el, {
      borderRadius: 0,
      backgroundColor: theme === "light" ? lightColor : darkColor,
      color: theme === "light" ? darkColor : lightColor,
      duration: 1.2,
      stagger: 0.3,
      ease: "sine",
    });
  };

  // animated box border
  useGSAP(() => {
    gsap.fromTo(
      ".animated-box",
      {
        borderWidth: 0,
        borderColor: theme === "light" ? darkColor : lightColor,
      },
      {
        borderWidth: 1,
        borderColor: theme === "light" ? darkColor : lightColor,
        stagger: {
          each: 0.05,
          from: "random",
        },
        duration: 0.5,
        ease: "elastic.in",
      }
    );
  }, [theme]);

  const totalBoxes = 98;
  const columns = 14;
  const rows = Math.ceil(totalBoxes / columns);
  const text = "MUDASSAR".split("");
  const text2 = "RASOOL".split("");
  const middleRow = Math.floor(rows / 2.9);
  const bottomRow = middleRow + 1;
  const iconRow = bottomRow + 1;

  const startIndex =
    middleRow * columns + Math.floor((columns - text.length) / 2);
  const startIndex2 =
    bottomRow * columns + Math.floor((columns - text2.length) / 2);
  const startIndexIcons = iconRow * columns + Math.floor((columns - 3) / 2);

  const icons = [
    {
      src: assets.images.linkedin,
      link: "www.linkedin.com/in/mudassar-rasool-b15130300",
    },
    { src: assets.images.github, link: "https://github.com/MudassarRassol" },
    {
      src: assets.images.instagram,
      link: "https://www.instagram.com/mudassar_rasool_7",
    },
    { src: assets.images.resume, link: assets.images.resumefordownload },
  ];

  const boxes = Array.from({ length: totalBoxes }, (_, index) => {
    let content = null;

    if (index >= startIndex && index < startIndex + text.length) {
      content = (
        <h1 className=" text-md md:text-3xl font-bold">
          {text[index - startIndex]}
        </h1>
      );
    }

    if (index >= startIndex2 && index < startIndex2 + text2.length) {
      content = (
        <h1 className="text-md md:text-3xl font-bold">
          {text2[index - startIndex2]}
        </h1>
      );
    }

    if (index >= startIndexIcons && index < startIndexIcons + icons.length) {
      const icon = icons[index - startIndexIcons];
      content = (
        <a href={icon.link} target="_blank" rel="noopener noreferrer">
          <Image
            width={90}
            height={90}
            src={icon.src}
            alt="icon"
            className=" w-6 h-6 md:w-18 md:h-18 hover:scale-110 transition duration-300 ease-in-out"
          />
        </a>
      );
    }

    return (
      <div
        key={index}
        onMouseEnter={(e) => startboxanimation(e.target)}
        onMouseLeave={(e) => startboxanimationleave(e.target)}
        className="animated-box flex items-center  justify-center aspect-square w-full border-b border-l"
        style={{
          backgroundColor: theme === "light" ? lightColor : darkColor,
          color: theme === "light" ? darkColor : lightColor,
        }}
      >
        {content}
      </div>
    );
  });

  return (
    <div className={` ${theme == "light" ? "light" : "dark"} `}>
      {/* Sticky section */}
      <section
        ref={sectionRef}
        className={`w-full h-auto md:top-0 items-center md:h-screen flex justify-center ${
          theme == "light" ? "light" : "dark"
        } `}
      >
        <div className="grid content-center w-full h-full grid-cols-14   ">
          {boxes}
        </div>
      </section>
    </div>
  );
};

export default Home;
