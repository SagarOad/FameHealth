import React, { Component } from "react";
import Slider from "react-slick";
import OurServicesCard from "./OurServicesCard";
import { GrNext } from "react-icons/gr"
import { GrPrevious } from "react-icons/gr"


export default class Responsive extends Component {
  render() {
    var settings = {
     infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <GrNext />,
      prevArrow: <GrPrevious />,
      responsive: [
        {
          breakpoint: 1024,
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
      <div className="services-slider">
        <Slider {...settings}>
          <div>
            <OurServicesCard />
          </div>
          <div>
          <OurServicesCard />
          </div>
          <div>
          <OurServicesCard />
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Slider>
      </div>
    );
  }
}