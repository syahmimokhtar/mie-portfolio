"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from 'next/link';


const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <>
      <div className="relative grid grid-cols-5 gap-2 container mx-auto"> 
          <img src="/images/techs/js.png"  className=' transition-transform duration-300 transform hover:-translate-y-2 hover:scale-105  relative w-full h-full' />
          <img src="/images/techs/html5.svg"  className=' transition-transform duration-300 transform hover:-translate-y-2 hover:scale-105  relative w-full h-full' />
          <img src="/images/techs/css.png"  className=' transition-transform duration-300 transform hover:-translate-y-2 hover:scale-105  relative w-full h-full' />
          <img src="/images/techs/react.png"  className=' transition-transform duration-300 transform hover:-translate-y-2 hover:scale-105  relative w-full h-full' />
          <img src="/images/techs/next-js.png"  className=' transition-transform duration-300 transform hover:-translate-y-2 hover:scale-105  relative w-full h-full' />

      </div>

        <ul className="list-disc pl-2">
        <li>Javascript</li>
        <li>HTML, CSS, Jquery, TailwindCSS</li>
        <li>MaterialUI </li>
        <li>React</li>
        <li>Next JS</li>
        </ul>

  
      </>
  
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Foundation Studies in Agricultural Science , Universiti Putra Malaysia (UPM)</li>
        <li>Bachelor in Software Engineering , Universiti Putra Malaysia (UPM) </li>
      </ul>
    ),
  },
  {
    title: "Certifications / Papers",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Published Paper writing on International Journal of Engineering and Advanced Technology (IJEAT)
           <Link target="_blank" href={"https://www.ijeat.org/wp-content/uploads/papers/v9i1/A2633109119.pdf"}><span className="text-blue-500 italic"> Refer here</span></Link></li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image alt="logo" className="rounded-full" src="/images/aboutMe.png" width={350} height={300} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hello everyone ! I once a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript ,JQuery , React,  PostgreSQL, PHP
            ,HTML, CSS, and Git <span className='text-blue-500 italic'> (refer my CV for more info)</span>
            . I love to learn new web technologies and try to implement it to expand my knowledge in web development.
            I am  looking forward to work with others and eager to learn from the best.
            Let us together create amazing applications that are beneficial to the consumers.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Publications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;