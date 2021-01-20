import React from "react";
import { Card } from 'antd';
import Slider from "react-slick";

import ear from '../../images/ear.svg';
import comments from '../../images/comments.svg';
import newspaper from '../../images/newspaper.svg';
import write from '../../images/write.svg';
import video from '../../images/video.svg';
import listening from '../../images/listen.jpg';
import conversation from '../../images/conversation.jpg';
import reading from '../../images/reading.jpg';
import writing from '../../images/writing.jpg';
import watching from '../../images/watching.jpg';

import s from './methods.module.css';

import useWindowSize from '../hooks/useWindowSize';

export default function Methods() {
  const cardsData = [
    {
      img: ear,
      alt: 'ear',
      description: 'Слушание',
      cover: listening,
    },
    {
      img: comments,
      alt: 'comments',
      description: 'Разговорная практика',
      cover: conversation,
    },
    {
      img: newspaper,
      alt: 'newspaper',
      description: 'Контекстное чтение',
      cover: reading,
    },
    {
      img: write,
      alt: 'write',
      description: 'Навыки грамотного письма',
      cover: writing,
    },
    {
      img: video,
      alt: 'video',
      description: 'Просмотр видеоматериалов',
      cover: watching,
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
              cover={<img alt="cover" className={s.cover} src={i.cover}/>}
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
              cover={<img alt="cover" className={s.cover} src={i.cover}/>}
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
            cover={<img alt="cover" className={s.cover} src={i.cover}/>}
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