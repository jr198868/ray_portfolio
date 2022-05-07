import React from 'react';
import './Codesample.css';


export default function Codesample() {
  return (
    <div className = "ray_codesample" id="codesample">
      <h1 className = "ray_codesample_title">My Code Sample</h1>
      <div className = 'ray__aboutme_biography'> 
        I have obtained two master's degrees from the University of Utah and Hong Kong University of Science and Technology. 
        After that, I was graduating from the Department of Civil and Environmental Engineering at the University of Maryland, College Park in 2019. 
        I have 4 years of experience in data science, 2 years of experience in bioinformatics pipeline development, 
        and 1.5 years of experience in back-end development.
      </div>
      <iframe src="https://codesandbox.io/embed/bitter-sun-gnl2rd?fontsize=14&hidenavigation=1&theme=dark"
          
          className = "ray_sandbox"
          style = {{width: "85%", height: 550}}
          title = "bitter-sun-gnl2rd"
          allow = "accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox = "allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
    </div>
    
  );
}

