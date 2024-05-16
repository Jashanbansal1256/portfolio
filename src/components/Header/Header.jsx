import React from "react";
import "./Header.css";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import CV from "../../assets/cv1.pdf";
import TypeWriterEffect from "react-typewriter-effect";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Jashan Bansal</h1>
        <h5 className="text-light">
          {" "}
          <div class="centered-span">
            <span>
              <TypeWriterEffect
                textStyle={{
                  color: "rgba(255, 255, 255, 0.6)",
                  fontSize: "17px",
                }}
                startDelay={2000}
                cursorColor="rgba(255, 255, 255, 0.6)"
                multiText={[
                  "Full Stack Developer",
                  "Frontend Developer",
                  "Backend Developer",
                  "UI/UX Designer",
                ]}
                cursor
                multiCursorStyle="_"
                multiTextDelay={1000}
                typespeed={30}
                multiTextLoop
              />
            </span>
          </div>
        </h5>
        <div className="cta">
          <a href={CV} download className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>{" "}
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
