// Import 'useState' Hook from React
import React, { useState } from 'react';
import ProjectCard from '../ProjectCard';
import Wrapper from '../Wrapper';
import projects from '../../projects.json';
import Footer from '../Footer/index';

function Portfolio() {
  const [projectsList, setprojectsList] = useState(projects);

  

  return (
    <Wrapper>
      <div id="portContainer" className="container">
        <div className="row">
      <h1 id="portTitle" className="title">Past Work</h1>
        </div>
      <div className="row">
      {projectsList.map(project => (
        <ProjectCard
          id={project.id}
          key={project.id}
          name={project.name}
          image={project.image}
          url={project.url}
          link={project.link}
        />
      ))}
      </div>
      <Footer></Footer>
      </div>
    </Wrapper>

  );
}

export default Portfolio;
