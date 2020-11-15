import React from 'react'
import NavBar from './Navbar/NavBar'
import Cards from './Components/Cards'
import Footer from '../Footer'
// import Home from './Components/Home'
const Landing = () => {
  return (
    <div>
      <NavBar />
      {/* <Home /> */}
      <Cards />
      <Footer />
    </div>
  )
}

export default Landing
