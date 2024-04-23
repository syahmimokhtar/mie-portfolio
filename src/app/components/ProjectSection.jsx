"use client";
import React, { useState ,useRef} from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";


const ProjectSection = () => {
  const projectsData = [
    {
      id: 1,
      title: "My Portfolio Website",
      description: "Implemented my portfolio with NextJS ,TailwindCSS, FramerMotion",
      image: "/images/projects/portfolio.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Movie Trailer App ",
      description: "Built with React , React Youtube and MaterialUI as UI component Framework. You can search movies , view ratings and watch trailers!",
      image: "/images/projects/movietrailerapp/movie.jpg",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "https://syahmimokhtar.github.io/movie-trailer-appmie/",
    },
    
    {
      id: 3,
      title: "SpootifyMie",
      description: `Built with React incorporating SpotifyAPI and Ant Design as UI component Framework. You can search artists, songs and play musics (premium account required).
      Disclaimer : Project is not fully optimized/completed,  just testing out Spotify API in react (proof off concept)
      `,
      image: "/images/projects/soundmie/soundmie.jpg",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "https://syahmimokhtar.github.io/spootifi-mieapp/",
    },

    {
      id: 4,
      title: "Research Paper",
      description: "Managed to publish research paper regarding my final year project (4th year of bachelor studies) on IJEAT.",
      image: "/images/projects/research.png",
      tag: ["All", "Other"],
      gitUrl: "/",
      previewUrl: "https://www.ijeat.org/wp-content/uploads/papers/v9i1/A2633109119.pdf",
    },

  ];

  const [tag, setTag] = useState("All");
  const ref=useRef(null);
  const isInView=useInView(ref, {once:true})

  const handlteTagChange = (newTag) => {
    setTag(newTag);
  };



  const filteredProjects = projectsData.filter((project) =>
  project.tag.includes(tag)
  );

  const cardVariants={
    initial:{ y:50, opacity:0},
    animate:{ y:0, opacity:1}
  };

  return (
    <section id='projects'>
      <h2 className="text-center text-4xl font-bold text-white mb-4">
        My Projects
      </h2>

      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handlteTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handlteTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handlteTagChange}
          name="Other"
          isSelected={tag === "Other"}
        />
      </div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li key={index} variants={cardVariants} initial="initial"
           animate={isInView ? "animate" :"initial"}
           transition={{duration:0.3, delay:index *0.4}}
           >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>

        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
