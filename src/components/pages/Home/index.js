import React from "react";
import './style.css';


const Home = () => (
  <header className="container">
    <div className="avatar">
      <a href="/">
        {/* <!--108X108 image of myself  --> */}
        <img src="../../images/darryl.png" alt="" />
      </a>
    </div>
    <div className="content">
      <h1>Darryl Simpson</h1>
      <p>Find me on:</p>
      <p>
        {/* <!--Twitter? <span><a href="" target="_blank"><i class="fab fa-twitter-square"></i></a></span> --> */}
        <span><a href="https://github.com/DarrylSimpson" target="_blank"><i className="fab fa-github-square"></i></a></span>
        <span><a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin"></i></a></span>
        {/* <!-- <span><a href="" target="_blank"><i class="fa fa-codepen"></i></a></span> --> */}
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

export default Home;
