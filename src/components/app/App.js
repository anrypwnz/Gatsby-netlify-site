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
import s from './app.module.css';

export default function App() {
  return (
    <>
      <HeaderBlock/>
      <CarouselBlock/>
      <div className={s.content}>
        <Container>
          <PlusesBlock/>
        </Container>
        <Container title={'methods'} grayBg>
        </Container>
        <Container title={'prices'}>
        </Container>
        <Container title={'Отзывы наших учеников'} grayBg>
          <Feedback/>
        </Container>
        <Container>
          <Photos />
        </Container>
        <Container id='form' grayBg>
          <FormBlock/>
        </Container>
      </div>
      <BackToTop/>
      <FooterBlock/>
    </>
  );
}