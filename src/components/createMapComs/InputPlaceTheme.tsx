import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { PlaceTheme, UserName } from '../../states/createMapState';

const InputPlaceTheme = () => {
  const [placeTheme, setPlaceTheme] = useRecoilState(PlaceTheme);
  const userName = useRecoilValue(UserName);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPlaceTheme(event.target.value);
  };
  return (
    <div
      css={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
        color: '#909090',
        fontSize: '1.6rem',
        marginTop: '3.2rem',
      }}
    >
      <div>{userName} 님은</div>
      <div>
        <St.Input type="text" value={placeTheme} onChange={handleInput}></St.Input>
        <span css={{ paddingLeft: '0.5rem' }}>을(를)</span>
      </div>
      <div>선물 받고 싶어요.</div>
    </div>
  );
};

export default InputPlaceTheme;

const St = {
  Input: styled.input`
    width: 60%;
    border: none;
    border-bottom: 1.5px solid #909090;
    padding: 0.5rem 0.8rem;
    color: #000;
    font-size: 2rem;
    font-weight: 600;

    &:focus {
      border: none;
      border-bottom: 1.5px solid ${({ theme }) => theme.colors.primary};
      outline: none;
    }
  `,
};
