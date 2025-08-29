import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/amrutha-kalyan-44826b259/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={20} style={{ marginRight: "8px" }} />
            LinkedIn
          </a>

          <a
            href="https://github.com/amruthakalyan"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={20} style={{ marginRight: "8px" }} />
            GitHub
          </a>

          <a href="mailto:amruthakalyan462@example.com">
            <FaEnvelope size={20} style={{ marginRight: "8px" }} />
            Email
          </a>
        </div>

        <div className="copyright">
            <p>Designed & developed by Kalyan.</p>
          <p>© 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
