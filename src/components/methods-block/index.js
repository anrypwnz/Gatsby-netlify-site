import React from "react";
import { Card } from 'antd';
import Slider from "react-slick";

import s from './methods.module.css';

import ear from '../../images/ear.svg';
import comments from '../../images/comments.svg';
import newspaper from '../../images/newspaper.svg';
import write from '../../images/write.svg';
import video from '../../images/video.svg';

import useWindowSize from '../hooks/useWindowSize';

export default function Methods() {
  const cardsData = [
    {
      img: ear,
      alt: 'ear',
      description: 'this is ear image'
    },
    {
      img: comments,
      alt: 'comments',
      description: 'short description 4-6 words'
    },
    {
      img: newspaper,
      alt: 'newspaper',
      description: 'this is ear image'
    },
    {
      img: write,
      alt: 'write',
      description: 'this is ear image'
    },
    {
      img: video,
      alt: 'video',
      description: 'this is ear image'
    },
  ];
  const settings = {
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false
  };
  const width = useWindowSize().width;

  if (width < 768 && width > 600) {
    settings.slidesToShow = 2;
    return (
      <div className={s.wrapT}>
        <Slider {...settings}>
          {cardsData.map((i, index) => {
            return <Card
              className={s.card}
              hoverable
              key={index}
            >
              <div className={s.text}>
                <img
                  className={s.icon}
                  src={i.img}
                  alt={i.alt}/>
                <p>{i.description}</p>
              </div>
            </Card>;
          })}
        </Slider>
      </div>
    );
  }
  if (width < 600) {
    settings.slidesToShow = 1;
    return (
      <div className={s.wrapT}>
        <Slider {...settings}>
          {cardsData.map((i, index) => {
            return <Card
              className={s.card}
              hoverable
              key={index}
            >
              <div className={s.text}>
                <img
                  className={s.icon}
                  src={i.img}
                  alt={i.alt}/>
                <p>{i.description}</p>
              </div>
            </Card>;
          })}
        </Slider>
      </div>
    );
  } else {
    return (
      <div className={s.wrap}>
        {cardsData.map((i, index) => {
          return <Card
            className={s.card}
            hoverable
            key={index}
          >
            <div className={s.text}>
              <img
                className={s.icon}
                src={i.img}
                alt={i.alt}/>
              <p>{i.description}</p>
            </div>
          </Card>;
        })}
      </div>
    );
  }


}