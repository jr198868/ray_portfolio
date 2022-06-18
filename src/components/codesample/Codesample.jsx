import React from 'react';
import './Codesample.css';
import styled from "styled-components";


const ProjectParagraph = styled.p`
            color: #000000; 
            text-align: left;
            font-size: 1.5rem;
            margin: 0 auto;
            padding-top: 20px;
            a {
                text-decoration: underline;
                color: #6699ff;
                :hover {
                    color: white;
                    text-decoration: none;
                }
            }
        `;

export default function Codesample() {
  return (
    <div className = "ray_codesample" id="codesample">
      <h1 className = "ray_codesample_title">My Code Demo</h1>
        <div className = 'ray__aboutme_biography'> 
          Code Demo 1: Virtualize Arithmetic Progression <br /><br />
          This is a simple example that the users can get computational results from backend through sending a frontend request to the backend API.
          Since I have done a lot of similar tasks during my daily work. In this case, the users can virtualize arithmetic progression by typing the initial term, the common difference, and the number of term.
        </div>
        <ProjectParagraph>
          <div className = 'ray__aboutme_biography'> 
            For the execution results, please check {" "}
          <a href="/Codedemo1" target="_blank" rel="noopener noreferrer">
            here
          </a> 
          </div>
        </ProjectParagraph>
        <iframe src="https://codesandbox.io/embed/hardcore-dew-cz2f28?fontsize=14&hidenavigation=1&theme=dark"   
            className = "ray_sandbox"
            style = {{width: "85%", height: 820}}
            title = "bitter-sun-gnl2rd"
            allow = "accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox = "allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          ></iframe>


      <div className = 'ray__aboutme_biography'> 
        Code Demo 2: React Custom Design Card <br /><br />
        React Custom Design Card consists of various elements like card photo area,  card name,  star rating, and text box. 
        It can construct different card as based on different requirements. Hover over the card to see each component instruction.
      </div>
      <ProjectParagraph>
          <div className = 'ray__aboutme_biography'> 
            For the execution results, please check {" "}
          <a href="/Codedemo2" target="_blank" rel="noopener noreferrer">
            here
          </a> 
          </div>
      </ProjectParagraph>

      <iframe src="https://codesandbox.io/embed/blissful-cerf-liq427?fontsize=14&hidenavigation=1&theme=dark"
        className = "ray_sandbox"
        style = {{width: "85%", height: 820}}
        title = "blissful-cerf-liq427"
        allow = "accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox = "allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>


      <div className = 'ray__aboutme_biography'> 
        Code Demo 3: 3D-effect css Card <br /><br />
        This project was build by using Mikulew's 3D Card RGB Effect project. 
        The smooth 3D tilt animation was achieved by the library forked from Tilt.js (jQuery version).

        <ProjectParagraph>
          <div className = 'ray__aboutme_biography'> 
            Source code:<a href = "https://github.com/Mikulew/css-3d-card-rgb-effect" target="_blank"> https://redstapler.co/css-3d-card-des...</a><br />
            Card Layout Tutorial: <a href = "https://youtu.be/cwC1qdPWBKo" target="_blank"> https://youtu.be/cwC1qdPWBKo </a>
          </div>
        </ProjectParagraph>
      </div>

      <iframe src="https://codesandbox.io/embed/goofy-chebyshev-hnjldb?fontsize=14&hidenavigation=1&theme=dark"
        className = "ray_sandbox"
        style = {{width: "85%", height: 750}}
        title="goofy-chebyshev-hnjldb"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>

    </div>
    
  );
}

