import React, { useState, useEffect} from 'react';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import './Header.scss'

import SliderData from '../../components/Slider/Slider-data';

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = SliderData.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide -1);
  }

  useEffect(() => {
    setCurrentSlide(0)
  }, []);

  return (
   <div className='slider'>
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide}/>
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide}/>
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