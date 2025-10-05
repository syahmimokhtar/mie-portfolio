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




          <p>Software skills </p><br></br>

           <ul className="list-disc pl-2">
              <li>Microsoft CRM Tools</li>
              <li>Chat systems and seller platforms (Shopee , Tiktok , Lazada, Meta, Whatsapp, Email Enquiries) </li>
              <li>Shopify & SiteGiant </li>
              <li>DHL Shipment Creation Process</li>
              <li>Order & Data Management (Excel / Google Sheets)</li>
              <li>Ticketing Systems</li>
              <li>Basic QA / Issue Tracking</li>
              <li>Proficient in Microsoft Office Suite (Word, Excel, PowerPoint), Microsoft Teams, and Visio</li>
              <li>Familiar with content creation tools (Adobe Premiere Pro, Illustrator, TikTok Studio, Tikfinity) from part-time streaming experience</li>

            </ul><br></br>


          <p>Technical Skills </p><br></br>

           <ul className="list-disc pl-2">
                <li>Knowledgeable in software testing techniques: Boundary-Value Analysis, Black Box Testing, Postman, Manual Testing</li>
                <li>Experienced in JavaScript and front-end technologies (HTML, CSS, jQuery, Tailwind CSS, Material UI)</li>
                <li>Proficient in wireframing and UI/UX design using tools like Figma, Axure RP, Canva, Justinmind, and Wix</li>
                <li>Proficient in React and Next.js for building dynamic user interfaces</li>
                <li>Experienced with Jira for task management, issue tracking, and team collaboration in Agile environments</li>
                <li>Skilled in writing user guides and software documentation based on IEEE standards</li>
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
      {/* <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"> */}
        <div className="py-8 px-4 sm:py-16 xl:px-16">

        {/* <Image alt="logo" className="rounded-full" src="/images/aboutMe.png" width={350} height={300} /> */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
             Hi, I am Syahmi — a Customer Service Specialist with a background in web development. 
             My experience in tech helps me analyze issues and provide effective solutions, while my current role has strengthened my communication and user support skills. 
             I am passionate about helping people and open to growing in customer service, IT support, or software testing roles.

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