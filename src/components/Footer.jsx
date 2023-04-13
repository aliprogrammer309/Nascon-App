import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
      <footer className="footer-distributed">
        <div className="footer-left">
          <img src="../assets/logo.png" alt="" />
          <h3>NasCon</h3>

          <p className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Contact</Link>
          </p>

          <p className="footer-company-name">NasCon © 2023</p>
        </div>

        <div className="footer-center">
          <div style={{display: "flex", alignItems: "center"}}>
            <LocationOnIcon />
            <p>
              <span>FAST NUCES</span> Islamabad, Pakistan
            </p>
          </div>

          <div style={{display: "flex", alignItems: "center", marginTop: "10px"}}>
            <CallIcon/>
            <p>+92 123 4567 890</p>
          </div>

          <div style={{display: "flex", alignItems: "center", marginTop: "10px"}}>
            <EmailIcon/>
            <p>
              <a href="mailto:support@nascon.com">support@nascon.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div className="footer-icons">
            <Link to="#">
              <FacebookIcon/>
            </Link>
            <Link to="#">
              <InstagramIcon/>
            </Link>
            <Link to="#">
              <LinkedInIcon/>
            </Link>
            <Link to="#">
              <YouTubeIcon/>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
