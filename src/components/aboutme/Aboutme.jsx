import React from 'react';
import aboutmeImage from '../../assets/aboutme.png';
import './Aboutme.css';

const Aboutme = () => (
  <div className="ray__aboutme section__padding" id="aboutme">

    <div className="ray__aboutme-image">
      <img src={aboutmeImage} alt="aboutme" style={{ width: "100%"}}/>
    </div>

    <div className="ray__aboutme-content">
      <h1>About Me</h1>
      
      <div className = 'ray__aboutme_biography'>
        I'm a USA based web developer, currently employed by a t-cell immunotherapy startup company 
        in Pennsylvania as a bioinformatics research associate/back-end development engineer.
      </div>
      <br />

      <div className = 'ray__aboutme_biography'> 
        I have obtained two master's degrees from the University of Utah and Hong Kong University of Science and Technology. 
        After that, I was graduating from the Department of Civil and Environmental Engineering at the University of Maryland, College Park in 2019. 
        I have 4 years of experience in data science, 2 years of experience in bioinformatics pipeline development, 
        and 1.5 years of experience in back-end development.
      </div>
      <br />

      {/* <div className = 'ray__aboutme_biography'> 
        Outside my work, I am an avid paleontologist and moviegoer. 
        I like to collect different dinosaur figures and books.
      </div> */}
      <br />

      <h2>Education</h2><br />
      <h2>
        University of Maryland, College Park   
      </h2>
      <div className = 'ray__aboutme_education'>
        PhD-Environmental Engineering
      </div>
      <h2>                                                          
        Hong Kong University of Science and Technology  
      </h2>
      <div className = 'ray__aboutme_education'>
        MPhil-Civil Engineering 
      </div>
      <h2>              
        University of Utah                                             
      </h2>
      <div className = 'ray__aboutme_education'>
        MS-Environmental Engineering
      </div>
      <br />
       
      <a href="https://github.com/jr198868" className="resume-download" target="_blank">Check My Resume</a>

    </div>
  </div>
);

export default Aboutme;

