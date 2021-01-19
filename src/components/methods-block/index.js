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
      description: 'Слушание',
      cover: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    },
    {
      img: comments,
      alt: 'comments',
      description: 'Разговорная практика'
    },
    {
      img: newspaper,
      alt: 'newspaper',
      description: 'Контекстное чтение'
    },
    {
      img: write,
      alt: 'write',
      description: 'Навыки грамотного письма'
    },
    {
      img: video,
      alt: 'video',
      description: 'Просмотр видеоматериалов'
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
              className={s.card + ' ' + s.card + '-' + i}
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
              className={s.card + ' ' + s.card + '-' + index}
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
            className={s.card + ' ' + s.card + '-' + index}
            hoverable
            key={index}
            cover={<img alt="cover" className={s.cover} src={i.cover} />}
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