import React from 'react';
import { BackTop, Layout } from 'antd';
import { CaretUpFilled } from '@ant-design/icons';
import CarouselBlock from "../carousel/";
import HeaderBlock from "../header";
import FooterBlock from "../footer";
import Container from '../container';
import s from './layout.module.css';

const { Content, Header } = Layout;

export default function BaseLayout() {
  return (
    <Layout>
      <Header>
        <HeaderBlock/>
      </Header>
      <CarouselBlock/>
      <Content className={s.content}>
        <Container title='pluses'>
        </Container>
        <Container title={'methods'}>
        </Container>
        <Container title={'feedback'}/>
        <Container title={'instagram photos'}/>
        <Container title={'application form'}/>
      </Content>
        <FooterBlock/>
      <BackTop>
        <div className={s.backTop}>
        <CaretUpFilled className={s.icon}/>
        </div>
      </BackTop>
    </Layout>
  );
}