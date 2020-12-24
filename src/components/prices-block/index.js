import React from "react";

import s from './prises.module.css';
import prices from './prices.jpg';

export default function Prises() {

  return (
    <img className={s.img} src={prices} alt="prices"/>
  );
}
