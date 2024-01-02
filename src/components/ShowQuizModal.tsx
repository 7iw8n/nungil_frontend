import styled from '@emotion/styled';
import { imgPresent } from '../assets/imgs';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { PlaceInfo, ShowQuizModalAtom } from '../states/mapState';

const ShowQuizModal: React.FC<{ placeId: number }> = ({ placeId }) => {
  const navigator = useNavigate();
  const [, setIsShowQuizModal] = useRecoilState(ShowQuizModalAtom);
  const { placeProvider } = useRecoilValue(PlaceInfo);
  return (
    <St.Container>
      <St.Modal>
        <St.HeaderSection>
          <span>잠시만요!</span>
          <span>이 글귀는 퀴즈를 맞춰야만 볼 수 있어요</span>
        </St.HeaderSection>
        <img src={imgPresent} alt="선물 이미지" css={{ width: '20rem', marginBottom: '4rem' }} />
        <St.MainSection>
          <span
            css={{
              color: '#262626',
              fontFamily: 'Pretendard',
              fontSize: '1.6rem',
              fontWeight: '600',
            }}
          >
            <span css={{ color: '#FA7268' }}>{placeProvider}</span> 님께서 퀴즈를 출제했어요.
          </span>
          <ul
            css={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem',
              margin: '1.5rem 0',
              color: '#505050',
              fontSize: '1.4rem',
            }}
          >
            <li>• 이 글귀는 퀴즈가 포함되어 있어요.</li>
            <li>• 퀴즈를 맞추지 못하면 해당 글귀를 읽지 못해요.</li>
            <li>• 걱정마세요! 힌트도 제공해요.</li>
          </ul>
        </St.MainSection>
        <St.BottomSection>
          <St.Button
            onClick={() => {
              navigator(`./quiz/${placeId}`);
              setIsShowQuizModal(false);
            }}
          >
            퀴즈 풀러가기
          </St.Button>
          <p
            onClick={() => {
              setIsShowQuizModal(false);
            }}
          >
            다음에 풀기
          </p>
        </St.BottomSection>
      </St.Modal>
    </St.Container>
  );
};

export default ShowQuizModal;

const St = {
  Container: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 4;
  `,
  Modal: styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60%;
    background-color: white;
    border-radius: 20px 20px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 4rem 1.7rem;
    & > div {
      width: 100%;
    }
  `,
  HeaderSection: styled.div`
    display: flex;
    flex-direction: column;
    color: #262626;
    font-family: Pretendard;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 2.5rem;
  `,
  MainSection: styled.div`
    flex: 1;
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
    width: 33.8rem;
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
