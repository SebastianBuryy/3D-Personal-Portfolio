import React, { Suspense } from "react";
import { myProjects } from "../constants";
import { Canvas } from "@react-three/fiber";
import { FiArrowUpRight } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import Computer from "../components/Computer";

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const currentProject = myProjects[selectedIndex];

  const handleNavigation = (direction) => {
    setSelectedIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section id="projects" className="my-20 c-space">
      <p className="head-text">Projects</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <div
            className="p-3 backdrop-filter md:mt-0 mt-4 backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-10 h-10 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-2xl text-white font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            {currentProject.number === 1 ? (
              <a
                href={currentProject.href}
                target="_blank"
                rel="noreferrer"
                className="flex mt-1 sm:p-3 p-2 bg-neutral-100 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-md items-center gap-2 cursor-pointer text-white-600"
              >
                <p>Check Live Site</p>
                <FiArrowUpRight className="w-5 h-5 text-white" />
              </a>
            ) : (
              <a
                href={currentProject.href}
                target="_blank"
                rel="noreferrer"
                className="flex mt-1 sm:p-3 p-2 bg-neutral-100 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-md items-center gap-2 cursor-pointer text-white-600"
              >
                <p>Source Code</p>
                <IoLogoGithub className="w-5 h-5 text-white" />
              </a>
            )}
          </div>
          <div className="flex justify-between items-center mt-7 mb-7 md:mb-0">
            <button
              onClick={() => handleNavigation("previous")}
              className="arrow-btn"
            >
              <img
                src="/assets/left-arrow.png"
                alt="left arrow"
                className="w-4 h-4"
              />
            </button>
            <button
              onClick={() => handleNavigation("next")}
              className="arrow-btn"
            >
              <img
                src="/assets/right-arrow.png"
                alt="right arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <Computer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
