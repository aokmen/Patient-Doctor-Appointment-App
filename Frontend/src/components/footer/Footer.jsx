import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        <p>Copyright © 2024 - terminuns Web Design </p>
      </div>
      <div className="footer-links">
        <ul>
          <li>
            <Link to="/impressum">
              <button>Impressum</button>
            </Link>
          </li>
          <li>
            <Link to="/datenschutz">
              <button>Datenschutz</button>
            </Link>
          </li>
          <li>
            <Link to="/hilfebereich">
              <button>Hilfebereich</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
