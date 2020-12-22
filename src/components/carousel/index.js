import React from 'react';
import s from './carousel.module.css';
import { Carousel } from 'antd';

const contentStyle = {
  // height: '560px',
  // color: '#fff',
  // lineHeight: '160px',
  // textAlign: 'center',
  // background: '#364d79',
};

export default function CarouselBlock() {
  return (
    <Carousel>
      <div className={s.slide}>
        <h1 className={s.title}>Школа иностранных языков</h1>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
}