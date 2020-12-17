import React from 'react';
import { Image } from 'antd';
import s from './photos.module.css';

export default function Photos() {

  return (
    <>
      <h2 className={s.title}>Следите за нами в <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></h2>
      <div className={s.wrap}>
        <Image
          src={'https://picsum.photos/500/300?random=1'}
          className={s.image}
        />
        <Image
          src={'https://picsum.photos/500/300?random=2'}
          className={s.image}
        />
        <Image
          src={'https://picsum.photos/500/300?random=3'}
          className={s.image}
        />
        <Image
          src={'https://picsum.photos/500/300?random=4'}
          className={s.image}
        />
        <Image
          src={'https://picsum.photos/500/300?random=5'}
          className={s.image}
        />
        <Image
          src={'https://picsum.photos/500/300?random=6'}
          className={s.image}
        />
        <Image
          src={'https://picsum.photos/500/300?random=7'}
          className={s.image}
        />
      </div>
    </>
  );
}