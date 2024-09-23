import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-7 border-t border-black-300 flex justify-center items-center flex-wrap gap-5">
      <div className="flex flex-col justify-center items-center text-center gap-3">
        <div className="flex gap-3">
          <a href="https://github.com/SebastianBuryy">
            <div className="social-icon">
              <IoLogoGithub className="w-8 h-8 text-white" />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/sebastianbury/">
            <div className="social-icon">
              <IoLogoLinkedin className="w-8 h-8 text-white" />
            </div>
          </a>
          <a href="https://discord.com/users/569546312572207104">
            <div className="social-icon">
              <FaDiscord className="w-7 h-7 text-white" />
            </div>
          </a>
        </div>

        <p className="text-white-500">
          &copy; 2024 Sebastian Bury. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
