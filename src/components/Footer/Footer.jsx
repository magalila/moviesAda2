import { Layout } from "antd";
import "./Footer.scss";
//import React from 'react';
import logo from "../../assets/iron.gif";
const Footer = () => {
  const { Footer } = Layout;

  return (
    <Footer className="footer">
      <img src={logo} alt="Logo" className="footer-logo" />
      <p>Made by Maggie </p>{" "}
      <img src={logo} alt="Logo" className="footer-logo" />
    </Footer>
  );
};

export default Footer;
