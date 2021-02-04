import React from 'react';
import s from './photos.module.css';

export default function Photos() {

  return (
    <>
      <h2 className={s.title}>Следите за нами в <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></h2>
      <div className={s.wrap}>
        <iframe src="//lightwidget.com/widgets/e83a4b7081ae5d0fb83dbf5315a4b611.html" scrolling="no" allowtransparency="true" className="lightwidget-widget" style={{width:'100%', height:'100%', border:0, overflow:'hidden'}}> </iframe>
      </div>
    </>
  );
}