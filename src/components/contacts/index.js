import React from "react";
import { WhatsAppOutlined, PhoneOutlined, MailOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import telegram from './telegram-outline.svg';

import s from './contacts.module.css';

export default function Contacts() {
  return (
      <div className={s.container}>
        <a href="+79162867492" className={s.link} rel="noreferrer"><PhoneOutlined className={s.icon} rotate={90}/>
          <span className={s.type}>Телефон</span><span>: +7 (916) 286-74-92</span>
        </a>
        <a href="mailto: llift.info@gmail.com" className={s.link} rel="noreferrer"><MailOutlined className={s.icon}/>
          <span className={s.type}>Почта</span><span>: llift.info@gmail.com</span>
        </a>
        <a href="https://wa.me/79162867492?text=Привет, хочу учиться языку!" className={s.link} target='_blank'
           rel="noreferrer">
          <WhatsAppOutlined className={s.icon}/>
          <span className={s.type}>WhatsApp</span><span>: +7(916) 286-74-92</span>
        </a>
        <a href="tg://resolve?domain=ElyaManucharyan" className={s.link} target='_blank' rel="noreferrer">
          <img src={telegram} alt="telegram" className={s.icon}/>
          <span className={s.type}>Telegram</span><span>: +7(916) 286-74-92</span>
        </a>
        <a href="https://www.instagram.com/languagelift" className={s.link} target='_blank' rel="noreferrer">
          <InstagramOutlined className={s.icon}/><span className={s.type}>Instagram</span><span>: @languagelift</span>
        </a>
        <a href="https://www.facebook.com/languagelift" className={s.link} target='_blank' rel="noreferrer">
          <FacebookOutlined className={s.icon}/><span
          className={s.type}>Facebook</span><span>: fb.com/languagelift</span>
        </a>
      </div>
  );
}