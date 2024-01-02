import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { imgLanding, imgNungil } from '../assets/imgs';
import styled from '@emotion/styled';

const LandingPage = () => {
  const navigator = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigator('/createMap');
    }, 2000);
  }, []);

  return (
    <div
      css={{
        position: 'relative',
        backgroundColor: '#FA7268',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <img css={{ width: '12rem', marginTop: '12rem' }} src={imgNungil} alt="로고" />
      <Intro>눈길 닿는 곳곳으로</Intro>
      <Intro>선물하는 추억</Intro>
      <img
        css={{ height: '55%', maxWidth: '450px', position: 'absolute', bottom: '0px', right: '0' }}
        src={imgLanding}
      />
    </div>
  );
};

export default LandingPage;

const Intro = styled.p`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 2.4rem;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.3px;
`;
