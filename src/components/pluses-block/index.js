import React from 'react';
import { Card, Typography } from 'antd';
import {
  FireOutlined,
  PlayCircleOutlined,
  TranslationOutlined,
  CoffeeOutlined,
  AimOutlined,
  RedoOutlined,
} from '@ant-design/icons';
import s from './pluses.module.css';

const { Title } = Typography;

export default function PlusesBlock() {

  return (
    <div className={s.wrap}>
      <Card className={s.card} hoverable>
        <TranslationOutlined className={s.icon}/>
        <Card.Meta title={<Title level={4}>Не используется язык-посредник</Title>}
                   description="  Использование языка-посредника (в данном случае, русского) не используется. Перевод отвлекает слушателей от непосредственного восприятия языка, затрудняет общение."/>
      </Card>

      <Card className={s.card} hoverable>
        <PlayCircleOutlined className={s.icon}/>
        <Card.Meta title={<Title level={4}>Игра</Title>}
                   description="Тренировочный процесс фактически является деловой игрой «в язык», плюс ролевые игры по конкретным темам. Например: во время занятий можно представить себя официантом в кафе или клиентом в отеле."/>

      </Card>
      <Card className={s.card} hoverable>
        <CoffeeOutlined className={s.icon}/>
        <Card.Meta title={<Title level={4}>Только реальные примеры из жизни</Title>}
                   description="Тренировочный процесс использует только реальные примеры из жизни, что способствует эмоциональному восприятию языка."/>
      </Card>

      <Card className={s.card} hoverable>
        <AimOutlined className={s.icon}/>
        <Card.Meta title={<Title level={4}>Сознательность</Title>}
                   description="Слушатели побуждаются не к механическому расширению объема новой информации, а к максимальному и сознательному использованию известной информации."/>
      </Card>

      <Card className={s.card} hoverable>
        <RedoOutlined className={s.icon}/>
        <Card.Meta title={<Title level={4}>Понимание привыкание автоматизм</Title>}
                   description="Тренировочный процесс основан на триаде «понимание-привыкание-автоматизм». Такая схема позволяет с удовольствием получать знания и применять их в реальной жизни."/>
      </Card>
      <Card className={s.card} hoverable>
        <FireOutlined className={s.icon}/>
        <Card.Meta title={<Title level={4}>Объяснение на конкретных примерах и образах</Title>}
                   description="Грамматические и функциональные структуры объясняются на конкретных примерах и образах, дающих максимальное и глубокое понимание их логики, идеи и смысла (использование жестов, символов, фигур)."/>
      </Card>
    </div>
  );
}