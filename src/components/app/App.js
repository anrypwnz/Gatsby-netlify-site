import React from 'react';
import CarouselBlock from "../carousel";
import HeaderBlock from "../header";
import FooterBlock from "../footer";
import Container from '../container';
import PlusesBlock from "../pluses-block";
import FormBlock from "../form-block";
import Feedback from "../feedback-block";
import BackToTop from "../backtop";
import Photos from "../photos-block";
import Prises from "../prices-block";
import MapBlock from "../map-block";
import Methods from "../methods-block";
import Contacts from "../contacts";
import s from './app.module.css';

export default function App() {
  return (
    <>
      <HeaderBlock/>
      <CarouselBlock/>
      <div className={s.content}>
        <Container title={'Методика'} subtitle={'Прямой коммуникативный метод преподавания'} marginTitle>
          <PlusesBlock/>
        </Container>
        <Container title={'Методы обучения'} grayBg>
          <Methods/>
        </Container>
        <Container title={'Стоимость услуг'} id='prices'>
          <Prises/>
        </Container>
        <Container title={'Отзывы наших учеников'} grayBg>
          <Feedback/>
        </Container>
        <Container>
          <Photos/>
        </Container>
        <Container id='contact' grayBg>
          <div className={s.wrapper}>
            <Contacts/>
            <FormBlock/>
          </div>
        </Container>
        <Container title={'Как добраться'} id='about'>
          <MapBlock/>
        </Container>
      </div>
      <BackToTop/>
      <FooterBlock/>
    </>
  );
}