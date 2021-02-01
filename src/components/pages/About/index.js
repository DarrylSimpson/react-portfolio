import React from "react";
import '../About/aboutStyle.css';
import avatar from '../../../bgImage/darryl.png';


const About = () => (
  <header className="container bg">
    <div className="avatar">
      <a href="/">
        <img src={avatar} alt="" />
      </a>
    </div>
    <div className="content">
      <h1>Darryl Simpson</h1>
      <p>Find me on:</p>
      <p>
        {/* <!--Twitter? <span><a href="" target="_blank"><i class="fab fa-twitter-square"></i></a></span> --> */}
        <span><a href="https://github.com/DarrylSimpson" target="_blank"><i className="fab fa-github-square"></i></a></span>
        <span><a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin"></i></a></span>
        <span><a href="mailto:darryl.simpson0793@gmail.com" target="_blank"><i class="fa fa-envelope-square"></i></a></span>
      </p>
      <p>As a graduate of the University of Wisconsin Coding Boot Camp, 
        my primary focus is full stack web development. I am knowledgeable 
        in the MERN stack of development and enjoy creating clean, functional 
        websites. Prior work and hands on training has allowed me an extensive
         understanding of computers, from building to installing necessary 
         software. I am a quick learner and thrive in challenging positions, 
         whether it be independant projects or those requiring a team approach. </p>
    </div>
  </header>
);

export default About;
