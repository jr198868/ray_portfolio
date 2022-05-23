import React from 'react';
import './Codesample.css';


export default function Codesample() {
  return (
    <div className = "ray_codesample" id="codesample">
      <h1 className = "ray_codesample_title">My Code Demo</h1>
      <div className = 'ray__aboutme_biography'> 
        Code Demo 1
      </div>
      <iframe src="https://codesandbox.io/embed/suspicious-swirles-12723n?fontsize=14&hidenavigation=1&theme=dark"
          
          className = "ray_sandbox"
          style = {{width: "85%", height: 720}}
          title = "bitter-sun-gnl2rd"
          allow = "accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox = "allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
    </div>
    
  );
}

