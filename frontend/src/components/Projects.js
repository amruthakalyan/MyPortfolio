import React, { useEffect, useState } from "react";
import api from "../api"; // axios instance
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/projects")
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="portfolio">
      <h1>Projects</h1>
      <p>Here are some of the projects I’ve worked on.</p>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="projects-grid">
          {projects.map((p) => (
            <ProjectCard
              key={p._id}
              title={p.title}
              description={p.description}
              demo={p.demo}
              repo={p.repo}
            />
          ))}
        </div>
      )}
    </section>
  );
}
