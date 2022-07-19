import React, { useState, useEffect} from 'react';

import Button from 'react-bootstrap/Button';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import './Header.scss'

import SliderData from '../../components/Slider/Slider-data';

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = SliderData.length;

  const autoScroll = true;
  let slideInterval;
  const intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide -1);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function auto(){
    slideInterval = setInterval(nextSlide, intervalTime);
  };

  useEffect(() => {
    setCurrentSlide(0)
  }, []);

  useEffect(() => {
    if(autoScroll){
      auto();
    };

    return () => clearInterval(slideInterval);
  }, [auto, autoScroll, currentSlide, slideInterval]);


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
                  <div className='slider-box'>
                  <img src={slide.image} alt="slide" />
                  <div className='content'>
                    <h2>{slide.heading}</h2>
                    <p>{slide.desc}</p>
                    <hr />
                    <Button variant="primary">Learn more</Button>
                  </div>
                  </div>
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