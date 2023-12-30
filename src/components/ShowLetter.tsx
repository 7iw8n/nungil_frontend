import styled from '@emotion/styled';
import { IconLetter } from '../assets/svgs';
import { useRecoilState } from 'recoil';
import { ShowLetterAtom } from '../states/mapState';
import { useRef, useEffect } from 'react';

const ShowLetter = () => {
  const [, setIsShowLetter] = useRecoilState(ShowLetterAtom);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsShowLetter(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <St.Container>
      <St.LetterBox ref={modalRef}>
        <IconLetter />
        <p css={{ color: '#5B5B5B', fontSize: '1.4rem', flex: '1', marginTop: '1.7rem' }}>
          여기 너랑 처음 갔던 곳인데 기억나? 그때 완전 좋았는데! 다음에 또 가고싶어😊
        </p>
        <p css={{ marginBottom: '2rem', color: '#9B9B9B', fontSize: '1.2rem' }}>
          슝슝이 · 2023년 11월 21일
        </p>
      </St.LetterBox>
    </St.Container>
  );
};

export default ShowLetter;
const St = {
  Container: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  LetterBox: styled.div`
    position: absolute;
    visibility: visible;
    width: 33rem;
    min-height: 24rem;
    padding: 3.2rem 2.7rem;
    background-color: white;
    border-radius: 38px;
    z-index: 30;
    border: 1px solid white;

    &::after {
      content: '';
      position: absolute;
      border-width: 20px;
      border-style: solid;
      top: 100%;
      left: 50%;
      margin-left: -20px; // 화살표의 폭에 따라 조정 가능
      border-color: white transparent transparent transparent;
    }

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
};
