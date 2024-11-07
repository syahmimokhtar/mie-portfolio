"use client";
import React , {useState} from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { saveAs } from 'file-saver';
import ToastPopup from "./ToastPopup";

const HeroSection = () => {

  const [showToast, setshowToast]=useState(false);
  const [download, setDownload]=useState(false);

  const downloadFile=()=>
  {
      const fileUrl = '/images/resume/syahmi_resume.pdf';

      fetch(fileUrl)
      .then(response=>response.blob())
      .then(blob=>
        {
          saveAs(blob, 'syahmi_resume.pdf')
        })

      setDownload(true);
      setshowToast(true);
        
  } 

  const handleCloseToast=()=>
  {
    setshowToast(false);
  }


  return (
    <section className="lg:py-16 ">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div initial={{opacity:0   , scale:0.5}}
          animate={{opacity:1,  scale:1}} 
          transition={{duration:0.5}}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
         >


          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-700">
              Hello, Welcome to my 
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                'Portfolio',
                2000,
                'Also A Gamer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '60px', display: 'inline-block' }}
              repeat={Infinity}
            />

          </h1>
          <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
              I&apos;m looking for new opportunity in front end web development or any job.
          </p>
          <div>
            {/* <button className="px-1 py-1 w-full sm:w-fit  rounded-full mr-4 bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700 hover:bg-slate-200 text-white">
              <Link href="/#contact" >Hire Me
               </Link>
               <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-5">
               <Link href="/#contact" >Hire Me </Link></span>

            </button> */}
            <button onClick={downloadFile} className="px-1  py-1  w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700 hover:bg-slate-800  text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-5">
                Download CV </span>
            </button>

            {download && <ToastPopup text="Downloaded CV!" showToast={showToast} handleClose={handleCloseToast} toastcolor={`bg-green-500`}/>}

          </div>
        </motion.div>

        <motion.div 
          initial={{opacity:0   , scale:0.5}}
          animate={{opacity:1,  scale:1}} 
          transition={{duration:0.5}}
          className="mt-5 col-span-4 place-self-center">
          {/* <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] relative"> */}
            <Image
              // src="/images/hero-image.png"
              src="/images/dp.jpg"
              alt="dp-picture"
              width={400}
              height={400}
              // className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              className="relative rounded-full"
            />
          {/* </div> */}
        </motion.div>
        
        

      </div>
    </section>
  );
};

export default HeroSection;
