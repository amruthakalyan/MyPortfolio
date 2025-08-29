import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard({ title, description, demo, repo }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-links">
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt style={{ marginRight: "6px" }} />
            Live Demo
          </a>
        )}
        {repo && (
          <a href={repo} target="_blank" rel="noopener noreferrer">
            <FaGithub style={{ marginRight: "6px" }} />
            GitHub Repo
          </a>
        )}
      </div>
    </div>
  );
}

