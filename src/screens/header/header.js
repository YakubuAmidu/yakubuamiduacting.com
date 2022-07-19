import React, { useState } from 'react';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import './Header.scss'

import SliderData from '../../components/Slider/Slider-data';

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
   <div className='slider'>
      <AiOutlineArrowLeft className="arrow prev" />
      <AiOutlineArrowRight className="arrow next" />
      {
        SliderData.map((slide, index) => {
          return (
            <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
              {
                index === currentSlide && (
                  <>
                  <img src={slide.image} alt="slide" />
                  <div className='content'>
                    <h2>{slide.heading}</h2>
                    <p>{slide.desc}</p>
                    <hr />
                    <button className='--btn--btn-primary'>Get Started</button>
                  </div>
                  </>
                )
              }
            </div>
          )
        })
      }
    </div>
  )
};

export default Header;