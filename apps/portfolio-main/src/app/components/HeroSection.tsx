"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="lg:py-16 ">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white  text-4xl lg:text-6xl font-extrabold mb-4">
            <span>Hello, I&apos;m </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Ayush Raj",
                1300,
                "Web Developer",
                1200, // wait 1s before replacing "Mice" with "Hamsters"
                "Mobile Developer",
                1200,
                "AI Developer",
                1200,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl mb-6">
            Harmonizing And Engineering Your Perfect Daily Symphony.
          </p>
          <button className="px-6 py-3 rounded-full mr-4 mb-2 bg-white hover:bg-slate-200 text-black">
            <a href="/contact">Hire Me</a>
          </button>
          <button className="px-6 py-3 rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white">
            <a href="/assets/resume/Ayush_Raj_Panda_resume.pdf" download>
              {" "}
              Download CV
            </a>
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              src="/assets/mypic.jpeg"
              alt="profile"
              width={300}
              height={300}
              className="transform -translate-x-[-0.3rem] lg:translate-x-[-2px] -translate-y-[-5px] rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
