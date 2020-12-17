import React from 'react';
import s from './container.module.css';

export default function Container({ children, title, id, grayBg = false }) {
  return (
    <div id={id} className={grayBg ? s.container + ' ' + s.containerGray : s.container}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </div>
  );
}