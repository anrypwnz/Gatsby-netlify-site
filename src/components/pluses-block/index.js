import React from 'react';
import { Card, Row, Col } from 'antd';
import { ScissorOutlined } from '@ant-design/icons';

import s from './pluses.module.css';

export default function PlusesBlock() {

  return (
    <div className={s.wrap}>
      <Row gutter={[40, 40]} justify="space-around" offset={3}>
        <Card className={s.card}>
          <ScissorOutlined className={s.scissor}/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
        </Card>
        <Card className={s.card}>
          <ScissorOutlined className={s.scissor}/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore </p>
        </Card>
        <Card className={s.card}>
          <ScissorOutlined className={s.scissor}/>
          <p>Lorem ipsum dolor</p>
        </Card>
      </Row>
      <Row gutter={[40, 40]} justify="space-around">
        <Card className={s.card}>
          <ScissorOutlined className={s.scissor}/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et </p>
        </Card>
        <Card className={s.card}>
          <ScissorOutlined className={s.scissor}/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et </p>
        </Card>
      </Row>

    </div>
  );
}