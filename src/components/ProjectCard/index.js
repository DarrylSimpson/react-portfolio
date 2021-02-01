import React from 'react';
import '../ProjectCard/projectsStyle.css';



// Props are passed through our functional component.
function ProjectCard(props) {

  const { name, image, link, url } = props; 

  return (

      <article className="user-c card">
        <div className="img-ctnt">
         <img id="portImg" alt={name} src={image} />
          <div id="contentCard" className="content">
            <h4>{name}</h4>
            <a href={url} target="_blank"><h4>{link}</h4></a>
          </div>
        </div>
      </article>

  );
}

export default ProjectCard;
