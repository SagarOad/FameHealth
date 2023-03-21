import React, { Component } from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import { GrNext } from "react-icons/gr"
import { GrPrevious } from "react-icons/gr"
import Data from "../Data/ProductsData"



export default class MultipleItems extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <GrNext />,
      prevArrow: <GrPrevious />,
       responsive: [
        {
          breakpoint: 1084,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
      <div className="mx-[53px] mb-8 hidden md:block">
        <Slider {...settings}>

          {Data.map(data=> (
            <div key={data.id}>
              <ProductCard 
               title={data.title}
               price={data.price}
               img={data.img}
              />
            </div>
          ))}
          
          <div>
          </div>
        </Slider>

        <div className="flex mt-3 justify-center items-center">
        <button type="button" class="text-white bg-[#114A8C] hover:bg-[#0f427c] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-6 py-4 text-center mt-10 mr-3 md:mr-0">Explore More Products</button>
        </div>
      </div>

      <div className="block md:hidden">
        <div className="flex overflow-scroll">
          {Data.map(data=> (
            <ProductCard
            title={data.title}
            price={data.price}
            img={data.img}
            />
          ))}
        </div>
      </div>
      </div>
    );
  }
}