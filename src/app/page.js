import React from 'react';
import Head from 'next/head';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
import AchievementSection from './components/AchievementSection';


const Home = () => {
  return (
    
    <main className="flex min-h-screen flex-col bg-[#0C0B0B] ">
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
      <NavBar /> 
          <div className="container mt-24 mx-auto py-4 px-12">
           <HeroSection />
           {/* <AchievementSection/> */}
           <AboutSection />
           <ProjectSection />
           <EmailSection />
        </div> 

        <Footer />
          
    </main>
  )
}

export default Home;