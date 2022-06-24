import React from 'react';
import styled from "styled-components";
import aboutmeImage from '../../assets/aboutme.png';
import './Aboutme.css';
import umd from '../../assets/umd.png';
import hkust from '../../assets/hkust.png';
import utah from '../../assets/utah.png';

class School extends React.Component {
  render() {

      const Tag = styled.div`
         
          border-radius: 6px;
          margin: .5rem;
          box-sizing: border-box;
          text-align: left;
          width: 120px;
          :hover {
              transform: translateY(-1px);
              transition: all 200ms ease;
          }
      `;

      const Logo = styled.img`
          border-radius: 6px;
          height: 100px;
          width: 100px;
          line-height: 1.6;
          box-shadow: 0 0.2rem 0.5rem;
          @media (max-width: 425px) {
            top: 15px;
            height: 70px;
            width: 70px;
            
        }
 
      `;

      const Title = styled.h3`
          left: 20;
          font-size: 18px;
          margin-top: 2px;
            
        }
      `;

      return (

          <div class='about_me_wrapper'>
          <div class='about_me_row'>
            <div class='about_me_colum'>
              <Tag>
                  <Logo src={this.props.src} alt={this.props.alt}/>
              </Tag>
            </div>
            <div class='about_me_column'>
              <div className = "ray_aboutme_school">
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      )
  }
}



const Aboutme = () => (
  <div className="ray__aboutme section__padding" id="aboutme">

    <div className="ray__aboutme-image">
      <img src={aboutmeImage} alt="aboutme" style={{ width: "100%"}}/>
    </div>

    <div className="ray__aboutme-content">
      <div className = "ray_title">About Me</div>
      
      <div className = 'ray__aboutme_biography'>
        I'm a USA based web developer, currently employed by a t-cell immunotherapy startup company in Pennsylvania 
        as a bioinformatics research associate/back-end development engineer.        
        I have obtained two master's degrees from the University of Utah and Hong Kong University of Science and Technology. 
        After that, I was graduating from the Department of Civil and Environmental Engineering at the University of Maryland, 
        College Park in 2019. 
        I have 4 years of experience in data science, 2 years of experience in bioinformatics pipeline development, 
        and 1.5 years of experience in back-end development.
      </div>
      <br />

      {/* <div>
        I have obtained two master's degrees from the University of Utah and Hong Kong University of Science and Technology. 
        After that, I was graduating from the Department of Civil and Environmental Engineering at the University of Maryland, 
        College Park in 2019.
      </div> */}

      {/* <div className = 'ray__aboutme_biography'> 
        Outside my work, I am an avid paleontologist and moviegoer. 
        I like to collect different dinosaur figures and books.
      </div> */}
      <br />

      <div className = "ray_title">Education</div><br />
        <div left duration={1000}>
          <School src={umd}>
            University of Maryland, College Park<br />
            PhD-Environmental Engineering
            <div className = "ray_title_time">
              September 2015 - December 2019
            </div>
          </School>
        </div>
                                                          
        <School src={hkust}>
            Hong Kong University of Science and Technology<br />
            MPhil-Civil Engineering<br />
            <div className = "ray_title_time">
              September 2012 - September 2014
            </div>
        </School>  

          
        <School src={utah}>
            University of Utah<br />
            MS-Environmental Engineering
            <div className = "ray_title_time">
              September 2010 - September 2012
            </div>
        </School>                                         
      <br />
       
      <a href="https://github.com/jr198868" className="resume-download" target="_blank">Check My Resume</a>

    </div>



    



  </div>
);

export default Aboutme;

