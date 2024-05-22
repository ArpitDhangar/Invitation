import React from "react";
import "./contact.scss";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import logo from "../../images/Sj.png";
import {MdEmail} from 'react-icons/md'

const Contact = () => {
  return (
    <footer className="contact">
      <div className="text">
        <p>Join us in celebrating love, laughter,<br/> and happily ever after!</p>
      </div>
      <div className="logoimg">
        <img src={logo} alt="Logo" />
      </div>
      <div className="info">
        <div className="links">
          <a href="https://www.instagram.com/shanu__m17/">
            <FaInstagram />
          </a>
          <a href="https://wa.me/919589557617">
            <FaWhatsapp />
          </a>
          <a href="mailto:shanutmathew1703@gmail.com">
            <MdEmail />
          </a>
        </div>
        <div className="name"><h4>Shanu Mathew</h4></div>
        <div className="number">
          <IoIosCall />
          95895 57617
        </div>
        {/* <span>© 2024 By Shanu.</span> */}
      </div>

    </footer>
  );
};

export default Contact;
