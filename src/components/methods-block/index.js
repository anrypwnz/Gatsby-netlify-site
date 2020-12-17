import React from "react";
import { Card } from 'antd';
import s from './methods.module.css';

export default function Methods() {
  return(
    <div className={s.wrap}>
      <Card
        className={s.card}
        cover={<img className={s.img} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        hoverable
      >
        <div className={s.text}>
          <h3>Title</h3>
          <p>short description 4-6 words</p>
        </div>
      </Card>
    </div>
  )
}