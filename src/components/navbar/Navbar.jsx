import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './Navbar.css';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#aboutme">About me</a></p>
    <p><a href="#languagesframeworks">Languages & Frameworks</a></p>
    <p><a href="#codesample">My Code Demo</a></p>
    <p><a href="#projects">My Projects</a></p>
    <p><a href="#contact">Contact</a></p>
  </>
)

//Block Element Modifier

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className = 'ray__nabar'> 
        <div className = 'ray__navbar-links'>

          <div className="ray__navbar-links_container">
            <Menu />
          </div>

          <div className = 'gpt__navbar-menu'> 
            {toggleMenu
              ? <RiCloseLine color = '#FFFFFF' size = {27} onClick = {() => setToggleMenu(false)} />
              : <RiMenu3Line color = '#FFFFFF' size = {27} onClick = {() => setToggleMenu(true)} />
            }
            {toggleMenu && (
              <div className = 'ray__navbar-menu_container scale-up-center'>
                <div className = 'ray__navbar-menu_container-links'>
                  <Menu />
                </div>  
              </div>
            )

            }
          </div>
        </div>
    </div>
  )
};

export default Navbar;