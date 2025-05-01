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
      {/* <div className="relative grid grid-cols-5 gap-2 container mx-auto"> 
          <img src="/images/techs/js.png"  className=' transition-transform duration-300 transform hover:-translate-y-2 hover:scale-105  relative w-full h-full' />
          <img src="/images/techs/html5.svg"  className=' transition-transform duration-300 transform hover:-translate-y-2 hover:scale-105  relative w-full h-full' />
          <img src="/images/techs/css.png"  className=' transition-transform duration-300 transform hover:-translate-y-2 hover:scale-105  relative w-full h-full' />
          <img src="/images/techs/react.png"  className=' transition-transform duration-300 transform hover:-translate-y-2 hover:scale-105  relative w-full h-full' />
          <img src="/images/techs/next-js.png"  className=' transition-transform duration-300 transform hover:-translate-y-2 hover:scale-105  relative w-full h-full' />
      </div> */}

        <ul className="list-disc pl-2">
          <li>Experienced in Customer Service </li>
          <li>Strong Communication skills and </li>
          <li>Experienced in writing user guides and software documentation based on IEEE standards</li>
          <li>Proficient in Microsoft Word, Excel, Powerpoint, Teams, Visio</li>
          <li>Knowledgeable in Boundary-Value Analysis, Postman, Black Box Testing , Manual Testing</li>
          <li>Familiar in Content Creation Tools ( Adobe Premiere Pro, Illustrator, Tiktok Studio, Tikfinity)</li>
          <li>Proficient in wireframing UI/UX Design using designing tools ( Canva, Wix, Figma, Axure RP, Justinmind )</li>
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
        <li>Bachelor in Software Engineering , Universiti Putra Malaysia (UPM) </li>
        <li>Foundation Studies in Agricultural Science , Universiti Putra Malaysia (UPM)</li>
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
           <li>
            Earned English Certificate from EFSET.org <Link target="_blank" href={"https://cert.efset.org/E5FwDX"}><span className="text-blue-500 italic"> Refer here</span></Link>
          </li>

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
            
          Hello everyone!
          I started my career as a full-stack web developer with a passion for crafting interactive and responsive web applications. My experience spans working with technologies such as JavaScript, jQuery, React, PostgreSQL, PHP, HTML, CSS, and Git. You can find more details in my CV.
          I thrive on learning new web technologies and applying them to enhance my expertise in development. 
          Recently, I have been exploring new career paths where I can leverage my technical background while broadening my skill set.
          I am particularly interested in transitioning to roles like technical writing, software testing, or IT support.
          I am eager to collaborate with others, learn from the best in the industry, and contribute meaningfully to projects that deliver real value to consumers. 
          Let us work together to create impactful solutions!
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
              Publications / Certifications
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