import React, { useState, useEffect } from 'react';
import {
  Header,
  HomeContainer,
  ImageContainer,
  SocialContainer,
  PinterestIcon,
  InstagramIcon,
  FacebookSquareIcon,
  TimerDiv,
  TimerCard,
  HR,
  Header2,
  CircleIcon,
  CircleRight,
  TextDiv,
  TimerText,
} from './styles';
import patternHills from '../../images/pattern-hills.svg';

const calculateTimeLeft = () => {
  var n = new Date();
  const f = new Date(n.getFullYear(), n.getMonth(), n.getDate() + 14);

  var difference = +f - +n;

  var timeLeft = {};
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  } else {
    timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return timeLeft;
};
const Home = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timeComponent = [];

  Object.keys(timeLeft).forEach((interval) => {
    // if (!timeLeft[interval]) {
    //   return;
    // }

    timeComponent.push(
      <TimerCard>
        <Header2>{timeLeft[interval]}</Header2>
        <HR />
        <CircleIcon />
        <CircleRight />
      </TimerCard>,
    );
  });

  return (
    <HomeContainer>
      <Header>WE'RE LAUNCHING SOON</Header>

      {/* {timeComponent.length ? timeComponent : <span>Time's up</span>} */}
      <TimerDiv>{timeComponent.length ? timeComponent : <span>Time's up</span>} </TimerDiv>

      <TextDiv>
        <TimerText>DAYS</TimerText>
        <TimerText>HOURS</TimerText>
        <TimerText>MINUTES</TimerText>
        <TimerText>SECONDS</TimerText>
      </TextDiv>
      <SocialContainer>
        <FacebookSquareIcon />
        <PinterestIcon />
        <InstagramIcon />
      </SocialContainer>

      <ImageContainer src={patternHills}></ImageContainer>
    </HomeContainer>
  );
};

export default Home;
