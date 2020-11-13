import React from 'react'
import './NavBar.css'
import TypedAnim from './TypedAnim';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="max-width">
          <div className="logo"><a href="#home">Portfo<span>lio.</span></a></div>
          <ul className="menu">
            <li><a href="#home" className="menu-btn">Home</a></li>
            <li><a href="#about" className="menu-btn">About</a></li>
            <li><a href="#services" className="menu-btn">Services</a></li>
            <li><a href="#skills" className="menu-btn">Skills</a></li>
            <li><a href="#teams" className="menu-btn">Teams</a></li>
            <li><a href="#contact" className="menu-btn">Contact</a></li>
          </ul>
          <div className="menu-btn">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>

      <section className="home" id="home">
        <div id="particles-js"></div>
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Hello, My Name is</div>
            <div className="text-2"><span>S</span>onu <span>K</span>umar</div>
            <div className="text-3">And I'm a
            <span className="typing">
                <TypedAnim
                  strings={["Developer", "Gamer", "Designer", "Freelancer"]}
                />
              </span>
            </div>

          </div>

        </div>
      </section>




    </div>
  )
}

export default NavBar
