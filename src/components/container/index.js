import React from 'react';
import s from './container.module.css';

export default function Container({ children, title, marginTitle, subtitle, id, grayBg = false }) {
  return (
    <div id={id} className={grayBg ? s.container + ' ' + s.containerGray : s.container}>
      {title ? <h2 className={marginTitle ? s.title + ' ' + s.titleMarginTop : s.title}>{title}</h2> : false}
      {subtitle? <h3 className={s.subtitle}>{subtitle}</h3> : false}
      {children}
    </div>
  );
}