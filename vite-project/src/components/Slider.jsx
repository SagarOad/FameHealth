import React, { Component } from "react";
import Slider from "react-slick";
import DoctorCard from "./DoctorCard";
import { GrNext } from "react-icons/gr"
import { GrPrevious } from "react-icons/gr"
import Data from "../Data/DoctorsData"





export default class MultipleItems extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToScroll: 1,
      nextArrow: <GrNext />,
      prevArrow: <GrPrevious />,
      responsive: [
        {
          breakpoint: 1383,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div className="our-doctors">
        <Slider {...settings}>
          
            {Data.map(data => (
             <div key={data.id}>  
              <DoctorCard 
              name={data.name} 
              speciality={data.speciality} 
              img={data.img} 
              />
              </div>
            ))}
          
        </Slider>
      </div>
    );
  }
}