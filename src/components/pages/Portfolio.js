// Import 'useState' Hook from React
import React, { useState } from 'react';
import ProjectCard from '../ProjectCard';
import Wrapper from '../Wrapper';
import projects from '../../projects.json';

function Portfolio() {
  const [projectsList, setprojectsList] = useState(projects);

  

  return (
    <Wrapper>
      <div className="container">
        <div className="row">
      <h1 className="title">Projects</h1>
        </div>
      <div className="row">
      {projectsList.map(project => (
        <ProjectCard
          id={project.id}
          key={project.id}
          name={project.name}
          image={project.image}
          link={project.link}
          location={project.location}
        />
      ))}
      </div>
      </div>
    </Wrapper>
  );
}

export default Portfolio;
