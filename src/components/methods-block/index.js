import React from "react";
import { Card } from 'antd';

import s from './methods.module.css';

import ear from '../../images/ear.svg';
import comments from '../../images/comments.svg';
import newspaper from '../../images/newspaper.svg';
import write from '../../images/write.svg';
import video from '../../images/video.svg';

export default function Methods() {
  return (
    <div className={s.wrap}>
      <Card
        className={s.card}
        hoverable
      >
        <div className={s.text}>
          <img
            className={s.icon}
               src={ear}
               alt='ear'/>
          <p>short description 4-6 words</p>
        </div>
      </Card>

      <Card
        className={s.card}
        hoverable
      >
        <div className={s.text}>
          <img
            className={s.icon}
            src={comments}
            alt='comments'/>
          <p>short description 4-6 words</p>
        </div>
      </Card>

      <Card
        className={s.card}
        hoverable
      >
        <div className={s.text}>
          <img
            className={s.icon}
            src={newspaper}
            alt='newspaper'/>
          <p>short description 4-6 words</p>
        </div>
      </Card>

      <Card
        className={s.card}
        hoverable
      >
        <div className={s.text}>
          <img
            className={s.icon}
            src={write}
            alt='write'/>
          <p>short description 4-6 words</p>
        </div>
      </Card>

      <Card
        className={s.card}
        hoverable
      >
        <div className={s.text}>
          <img
            className={s.icon}
            src={video}
            alt='video'/>
          <p>short description 4-6 words</p>
        </div>
      </Card>
    </div>
  );
}