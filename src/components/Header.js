import React, { useEffect } from "react";
import { gsap } from "gsap";
import logo from "../assets/image/logo.svg";
import logo_pcq from "../assets/image/logo-pcq.svg";

const Header = () => {
  useEffect(() => {
    gsap.from(".logo", {
      y: -80,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out",
    });
  }, []);

  return (
    <header className="header">
      <div className="logo logo-pcq">
        <img src={logo_pcq} alt="Logo Pabel Cabanillas Quispe" />
        <h2>Pabel Cabanillas Quispe</h2>
      </div>
      <img src={logo} className="logo" alt="Logo Stacky Code" />
    </header>
  );
};

export default Header;
