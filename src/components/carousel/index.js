import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from './carousel.module.css';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className + ' ' + s.arrowRight}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className + ' ' + s.arrowLeft}
      onClick={onClick}
    />
  );
}

export default function CarouselBlock() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
  };

  return (
    <Slider {...settings}>
      <div className={s.slide + ' ' + s.slide1}>
        <h3 className={s.title}>Lorem Ipsum</h3>
      </div>
      <div className={s.slide + ' ' + s.slide2}>
        <h3 className={s.title}>Online bla bla bla</h3>
      </div>
      <div className={s.slide + ' ' + s.slide3}>
        <h3 className={s.title}>Individual Group</h3>
      </div>
      <div className={s.slide + ' ' + s.slide4}>
        <h3 className={s.title}>Lalalalal </h3>
      </div>
    </Slider>
  );
}
