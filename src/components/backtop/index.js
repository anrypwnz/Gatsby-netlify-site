import React from 'react';
import { BackTop } from "antd";
import { CaretUpFilled } from "@ant-design/icons";
import s from "./backtop.module.css";

export default function BackToTop() {
  return (
    <BackTop>
      <div className={s.backTop}>
        <CaretUpFilled className={s.icon}/>
      </div>
    </BackTop>
  );
}

