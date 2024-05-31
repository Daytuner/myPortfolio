"use client";
import React, { useTransition, useState, useEffect } from "react";
import Image from "next/image";
import TabButton from "../components/TabButton";
import { motion } from "framer-motion";

interface TabData {
  title: string;
  id: string;
  content: React.ReactNode | React.JSX.Element | null;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Computer Science And Engineering(AI/ML)</li>
        <li>Dayananda Sagar University,Banglore,IN</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <a href="https://drive.google.com/file/d/1t2Ins2aV-BazTP9mo82UdcVibXkGZYap/view">
            COMPLETE WEB DEVLOPEMENT BOOTCAMP{" "}
          </a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1mXs4GJdaLq0o0tdBa6IR6r7DQ7iJuyYW/view?usp=drive_link">
            Complete ML&Data Science Bootcamp 2022
          </a>
        </li>
        <li>
          <a href="https://certificates.mooc.fi/validate/p3xf8yl1oxf">
            ELEMENTS OF AI
          </a>
        </li>
        <li>
          <a href="https://app.100xdevs.com/certificate/verify/B9X7OQBS">
            100xDev Cohort By Harkirat Singh
          </a>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState<string | null>("skills");
  const [isPending, startTransition] = useTransition();
  const [ans, setAns] = useState<any>("skills");

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
    setAns(TAB_DATA.find((t) => t.id === tab));
  };
  useEffect(() => {
    setAns(TAB_DATA.find((t) => t.id === tab));
  }, [tab, ans]);

  return (
    <section className="text-white ">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 sm:grid-cols"
      >
        <Image
          src="/assets/abt_me.jpg"
          className="rounded-full"
          alt="about"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hello! I'm Ayush Raj Panda AKA Daytuner, a dedicated Full Stack
            Developer with a passion for creating dynamic and efficient web
            applications. With a robust skill set that spans across the MERN
            stack, Java, and Data Science, I bring a unique blend of expertise
            to every project I undertake.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">{ans?.content}</div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
