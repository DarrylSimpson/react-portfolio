import React from "react";
import '../Resume/resumeStyle.css';
import resumeDownload from '../../../bgImage/DarrylSimpsonResumeDraft.pdf';
import Footer from '../../Footer/index';

const Resume = () => (

 <section> 
       <h1 id="resumeHeader">Resume</h1>
  <div className="container">
  <a href={resumeDownload} target="_blank" ><h1 id="resumeDownload">Download my Resume here</h1></a>
  <div className="row">
    <div className="col-4">
      <h1 id="resumeList">Front-End Proficiencies</h1>
    <ul className="proficiencies">
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>JQuery</li>
      <li>Responsive Design</li>
      <li>React</li>
      <li>Bootstrap</li>
      <li>Handlebars</li>
    </ul>
  </div>
  <div className="col-4"></div>
  <div className="col-4">
  <h1 id="resumeList">Back-End <br />Proficiencies</h1>
    <ul className="proficiencies">
      <li>API's</li>
      <li>Node</li>
      <li>Express</li>
      <li>MySQL, Sequelize</li>
      <li>MongoDB</li>
      {/* <li>REST</li>
      <li>GraphQL</li> */}
    </ul>
  </div>
  </div>
  <Footer></Footer>
  </div>
  </section>
);

export default Resume;
