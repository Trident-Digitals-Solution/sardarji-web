import React from 'react'
import './NavBar.css'
import TypedAnim from './TypedAnim';

const NavBar = () => {
  return (
    <div>
    <nav className="navbar">
      <div className="max-width">
        <div className="logo"><a href="#home">Sardar<span >Ji</span></a></div>
        <ul className="menu">
          <li><a href="#home" className="menu-btn">Home</a></li>
          <li><a href="#about" className="menu-btn">About</a></li>
          <li><a href="#services" className="menu-btn">Products</a></li>
          <li><a href="#skills" className="menu-btn">Projects</a></li>
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
          <div className="text-1">Greetings,</div>
          <div className="text-2">We, <span >SardarJi Building Solutions</span>, are
            a complete <span >Build Mart</span> (Building Material) store in
            <span > Bilaspur</span> and we have projects running in Chhattisgarh, Madhya Pradesh,
            Maharashtra, Orissa, Bihar etc.</div>
          <div className="text-3">We are Dealers &amp; Distributers of 
          <span className="typing">
              <TypedAnim
                strings={["Cement", "Iron & Steel and TMT", "AAC Blocks", "Paints",
                "Wood Polish"]}
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
