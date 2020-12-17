import React from 'react';
import { Card } from 'antd';
import { ScissorOutlined } from '@ant-design/icons';

import s from './pluses.module.css';

export default function PlusesBlock() {

  return (
    <div className={s.wrap}>
      <Card className={s.card} hoverable>
        <ScissorOutlined className={s.scissor}/>
        <Card.Meta title="Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"/>
      </Card>

      <Card className={s.card} hoverable>
        <ScissorOutlined className={s.scissor}/>
        <Card.Meta title="Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"/>
      </Card>

      <Card className={s.card} hoverable>
        <ScissorOutlined className={s.scissor}/>
        <Card.Meta title="Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"/>

      </Card>
      <Card className={s.card} hoverable>
        <ScissorOutlined className={s.scissor}/>
        <Card.Meta title="Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"/>
      </Card>

      <Card className={s.card} hoverable>
        <ScissorOutlined className={s.scissor}/>
        <Card.Meta title="Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"/>
      </Card>

      <Card className={s.card} hoverable>
        <ScissorOutlined className={s.scissor}/>
        <Card.Meta title="Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"/>
      </Card>
    </div>
  );
}