import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/jashan-bansal-a69930237/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Jashanbansal1256" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a
        href="https://medium.com/@jashanbansal7861"
        target="_blank"
        rel="noreferrer"
      >
        <BsMedium />
      </a>
    </div>
  );
};

export default HeaderSocials;
