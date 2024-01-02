import styled from '@emotion/styled';
import { imgBeginningModal } from '../assets/imgs';

const BeginningModal = ({ setShowModal, placeProvider }: any) => {
  return (
    <St.Container>
      <St.Modal>
        <div css={{ color: '#262626', fontSize: '2rem', fontWeight: '700' }}>
          당신의 장소를 선물하세요
        </div>
        <div
          css={{
            color: '#5b5b5b',
            fontSize: '1.3rem',
            fontWeight: '600',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          <p>
            당신의 <span css={{ color: '#FA7268' }}>소소한 여행지</span> 를 선물하세요!
          </p>
          <p>위치를 추가하고, 짤막한 이야기로 추억을 나눌 수 있어요</p>
        </div>
        <img css={{ width: '27rem' }} src={imgBeginningModal} alt="사진" />
        <St.BottomSection>
          <St.Button onClick={() => setShowModal(false)}>장소 선물하러 가기</St.Button>
        </St.BottomSection>
      </St.Modal>
    </St.Container>
  );
};

export default BeginningModal;

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
    z-index: 3;
  `,
  Modal: styled.div`
    width: 35rem;
    height: 45rem;
    background-color: white;
    border-radius: 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 4rem 1.7rem;
  `,
  BottomSection: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    & > p {
      color: #c5c5c5;
      text-align: center;
      font-family: Pretendard;
      font-size: 1.3rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin: 1rem;
    }
  `,
  Button: styled.button`
    display: flex;
    width: 30rem;
    height: 4.5rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.White};
    text-align: center;
    font-family: Pretendard;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `,
};
