import React from "react";
import "./footer.css"
const Footer = () => {
  return (
    <div className="footer">
      
      <div className="copyright">
        <p>Copyright © 2024 - terminuns Web Design </p>
      </div>
      <div className="footer-links">
        <ul>
          <li><button>Kontakt</button></li>
          <li><button>Impressum</button></li>
          <li><button>Datenschutz</button></li>
        </ul>
      </div>
    </div>
  )
};

export default Footer;
