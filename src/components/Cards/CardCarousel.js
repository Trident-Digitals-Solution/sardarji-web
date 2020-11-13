import React, { Component } from 'react'
import MyCard from './MyCard';
import Carousel from 'react-elastic-carousel';
import './MyCard.css'


class CardCarousel extends Component {
  render() {
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 670, itemsToShow: 2 },
      { width: 1000, itemsToShow: 3 },
    ]

    return (
      <section className="teams" id="teams">
        <div className="max-width">
          <h2 className="title">Our Team</h2>
          <div className="carousel owl-carousel">
            <Carousel breakPoints={breakPoints}>
              <MyCard
                img='images/Carousel/Sonu.png'
                name="Sonu Kumar"
                position="Web Developer at DSC-GGV"
                aim="Aspiring Cyber Security Expert"
                study="Pursuing B.Tech. in Information Technology" />
              <MyCard
                img='images/Carousel/Swajeet.jpg'
                name="Swajeet Swrankar"
                position="Loves coding"
                aim="[Java, C/C++, Python, Android, Web]"
                study="Pursuing B.Tech. in Information Technology" />
              <MyCard
                img='images/Carousel/BensionDhanji.png'
                name="Benison Dhanji"
                position="B.Tech. in Mechanical Engineering"
                aim="MBA in Marketing & Finanace"
                study="Director and Manager at Trident Digitals Bilaspur" />
              <MyCard
                img='images/Carousel/JaspreetSingh.png'
                name="Jaspreet Singh"
                position="MBA in Marketing and Operation"
                aim="Management & Post-Graduate Diploma in"
                study="Bussiness Strategy & Entrepreneurship" />
            </Carousel>
          </div>
        </div>

      </section >
    )
  }
}
export default CardCarousel;
