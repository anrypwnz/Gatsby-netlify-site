import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <div>
      <h1 className={s.header}>Hello, World!</h1>
      <img src="https://source.unsplash.com/random/400x400" alt=""/>
    </div>
  )
}

export default Header;