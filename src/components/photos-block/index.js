import React, { useEffect } from 'react';
import s from './photos.module.css';

export default function Photos() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://apps.elfsight.com/p/platform.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <>
      <h2 className={s.title}>Следите за нами в <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></h2>
      <div className={s.wrap}>
        <div className="elfsight-app-373b6357-ba82-4843-95d8-1c75856a3c59">

        </div>
      </div>
    </>
  );
}