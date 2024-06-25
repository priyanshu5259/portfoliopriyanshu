import React, { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/portfolioList";
import "./portfolio.scss";
import { projectsData } from "../../data"; // Import the projects data

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSelect = (id) => {
    const project = projectsData.find(project => project.id === id);
    setSelectedProject(project);
  };

  return (
    <div className="portfolio" id="portfolio">
      <h1>Featured Projects</h1>
      <ul>
        {projectsData.map((project) => (
          <PortfolioList key={project.id} title={project.title} active={selectedProject?.id === project.id} setSelected={() => handleSelect(project.id)} id={project.id} />
        ))}
      </ul>
      {selectedProject && (
        <div className="project-details">
          <img src={selectedProject.imageUrl} alt={selectedProject.title} />
          <p>{selectedProject.description}</p>
          {/* Clickable GitHub Logo */}
          <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
            <img src="assets\icons8-github-24.png" alt="GitHub" style={{width: '40px', height: '40px'}} />
          </a>
        </div>
      )}
    </div>
  );
}
