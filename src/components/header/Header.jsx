import React from 'react';
import ai from '../../assets/ai.jpg';
import Avatar from "@material-ui/core/Avatar";
import LinkedIn from '../../assets/LinkedIn.png';
import Github from '../../assets/Githublogo.png';
import Gmail from '../../assets/Gmail.png';
import './Header.css';

const Header = () => {
  return (
    <div className="ray__header section__padding" id="home">
        <div className="ray__header-content">
          <h1 className="gradient__text">Raymond Jing</h1>
          <h1 className="gradient__text">A web developer and bioinformatics data scientist based in USA</h1>

          <div className="ray__header-content__input">
            <div className="Contactlogo">
                <a href="https://www.linkedin.com/in/ran-raymond-jing-563102113/" target="_blank">
                  <Avatar src = {LinkedIn} alt={"LinkedIn"} style={{width: 60, height: 60}} />
                </a>
            </div>
            <div className="Contactlogo">
                <a href="https://github.com/jr198868" target="_blank">
                  <Avatar src = {Github} alt={"Github"} style={{width: 60, height: 60}} />
                </a>
            </div>
            <div className="Contactlogo">
                <a href="#contact">
                  <Avatar className="Gmail"  src = {Gmail} alt={"Gmail"} style={{width: 60, height: 60}} />
                </a>
            </div>
          </div>

        </div>
        
        <div className="ray__header-image">
          <img src={ai} />
        </div>
    </div>
  )
};

export default Header;