import React from "react";
import Button from "../components/Button";
import { useState } from "react";
import { PinContainer } from "../components/ui/3d-pin";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";

const About = () => {
  return (
    <section id="about" className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid8.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">About Me</p>
              <p className="grid-subtext">
                I'm a 3rd year Computer Science & Business student at Trinity
                College Dublin. I enjoy developing full stack applications in
                both professional environments and personal projects.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/techstacklogos.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I mainly work with JavaScript, focusing on React and Next.js for
                frontend development. I like to use Python, and Java when
                working on the backend.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm-h-[326px] h-fit flex justify-center items-center">
              <img
                src="/assets/darkglobe.png"
                alt="globe"
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <p className="grid-headtext">Flexible Schedule</p>
              <p className="grid-subtext">
                Based in Ireland, I'm available for both remote and in-person
                work. I'm open to new opportunities and challenges.
              </p>
              <a href="#contact">
                <Button
                  name="Contact Me"
                  isBeam
                  containerClass="w-full mt-10"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Passion for Coding</p>
              <p className="grid-subtext">
                I enjoy solving problems and building software. I'm always eager
                to learn new technologies and improve my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <div className="flex justify-center space-x-12">
              <PinContainer
                title="Github"
                href="https://github.com/SebastianBuryy"
              >
                <div className="flex justify-center items-center">
                  <IoLogoGithub className="text-white w-20 h-20" />
                </div>
              </PinContainer>

              <PinContainer
                title="LinkedIn"
                href="https://www.linkedin.com/in/sebastianbury/"
              >
                <div className="flex justify-center items-center">
                  <IoLogoLinkedin className="text-white w-20 h-20" />
                </div>
              </PinContainer>
            </div>
            <p className="grid-headtext mt-10">Socials</p>
            <p className="grid-subtext mt-[-16px]">
              Feel free to connect with me on LinkedIn or explore my work on
              Github!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
