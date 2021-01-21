import styled, { css } from 'styled-components';

import { Pinterest } from '@styled-icons/boxicons-logos/Pinterest';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';
import { FacebookSquare } from '@styled-icons/boxicons-logos/FacebookSquare';

const imageStyle = css`
  width: 50px;
  height: 50px;
  padding-right: 30px;
  color: hsl(237, 18%, 59%);
  &:hover {
    color: hsl(345, 95%, 68%);
  }
`;
export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const Header = styled.h1`
  font-weight: 700;
  font-size: 40px;
  letter-spacing: 10px;
  color: white;
  text-align: center;
  margin: 15vh auto 0;
  /* max-width: 90%; */
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: 150px;
  position: fixed;
  bottom: 0%;
  min-width: 100vw;
`;

export const SocialContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  position: fixed;
  top: 93%;
  z-index: 999;
`;

export const PinterestIcon = styled(Pinterest)`
  ${imageStyle};
`;

export const InstagramIcon = styled(Instagram)`
  ${imageStyle}
`;
export const FacebookSquareIcon = styled(FacebookSquare)`
  ${imageStyle}
`;

export { Pinterest, Instagram, FacebookSquare };

export const TimerDiv = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  margin: 100px auto;
  display: flex;
  justify-content: center;
  max-width: 90%;
`;

export const TimerCard = styled.div`
  width: 150px;
  height: 140px;

  /* background-image: linear-gradient(hsl(236, 21%, 26%), hsl(237, 18%, 59%)); */

  background-color: hsl(236, 21%, 26%);
  border-radius: 15px;
  margin: 0 20px;
  text-align: center;
  padding: 0 auto;
  box-shadow: 0px 15px 3px hsl(234, 17%, 12%);
`;

export const HR = styled.hr`
  background-color: hsl(235, 16%, 14%) !important;
  /* color: black !important; */
  position: relative;
  width: 85%;
  z-index: 99;
  top: 50%;
  opacity: 0.2;
`;

export const Header2 = styled.h2`
  color: hsl(345, 95%, 68%);
  font-size: 90px;
  position: absolute;
  margin: 0 auto;
  text-align: center !important;
  padding: 0 20px;
  z-index: 999;
  display: flex;
  justify-content: center;
`;

export const CircleIcon = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 35% 0;
  text-align: left;
  position: relative;
  left: -75px;
  background-color: hsl(235, 16%, 14%);
  z-index: 9999;
`;

export const CircleRight = styled.div`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;

  position: relative;
  bottom: 76px;
  left: 95%;

  background-color: hsl(235, 16%, 14%);
`;

export const TextDiv = styled.div`
  width: 90%;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  bottom: 50px;
`;
export const TimerText = styled.span`
  color: hsl(237, 18%, 59%);
  font-size: 20px;
  width: 190px;
`;
