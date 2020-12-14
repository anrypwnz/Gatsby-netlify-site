import React from 'react';
import s from './container.module.css';

export default function Container({ children, title, id }) {
  return (
    <div id={id} className={s.container}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}