import styled from '@emotion/styled';
import { IconArrowLeft } from '../assets/svgs/index.ts';
import { CREATEMAP } from '../constants/CREATEMAP.ts';
import { useState } from 'react';
import InputNickname from '../components/createMapComs/InputNickname.tsx';
import InputPlaceTheme from '../components/createMapComs/InputPlaceTheme.tsx';
import LinkShare from '../components/createMapComs/LinkShare.tsx';

const CreateMapPage = () => {
  const [stage, setStage] = useState(1);

  const renderStageComponent = () => {
    switch (stage) {
      case 1:
        return <InputNickname />;
      case 2:
        return <InputPlaceTheme />;
      case 3:
        return <LinkShare />;
      default:
        return null;
    }
  };

  return (
    <St.Container>
      <St.TopSection
        onClick={(e) => {
          e.preventDefault();
          setStage(stage - 1);
        }}
      >
        <IconArrowLeft />
      </St.TopSection>
      <St.MainSection>
        {stage <= 2 && (
          <div css={{ marginBottom: '2.2rem' }}>
            <M.StageBlod>{stage} </M.StageBlod>
            <M.StageDefault>/ 2</M.StageDefault>
          </div>
        )}
        <M.Title dangerouslySetInnerHTML={{ __html: CREATEMAP[stage].title }} />
        <M.Explain dangerouslySetInnerHTML={{ __html: CREATEMAP[stage].explain }} />
        {renderStageComponent()}
      </St.MainSection>
      <St.BottomSection>
        <St.Button
          onClick={(e) => {
            e.preventDefault();
            setStage(stage + 1);
          }}
        >
          다음으로
        </St.Button>
      </St.BottomSection>
    </St.Container>
  );
};

export default CreateMapPage;

const St = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    padding: 2.7rem;
    gap: 3.8rem;
  `,
  TopSection: styled.div`
    display: flex;
  `,
  MainSection: styled.article`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: start;
    padding: 0.8rem;
  `,
  BottomSection: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Button: styled.button`
    display: flex;
    width: 33.8rem;
    height: 4.5rem;
    justify-content: center;
    align-items: center;
    gap: 10px;
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

const M = {
  StageBlod: styled.span`
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.3px;
  `,
  StageDefault: styled.span`
    color: #b1b1b1;
    font-family: Pretendard;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.3px;
  `,
  Title: styled.p`
    color: #262626;
    font-family: Preten dard;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.3px;
  `,
  Explain: styled.div`
    color: #909090;
    font-family: Pretendard;
    font-size: 1.4rem;
    font-style: normal;
    line-height: 1.8rem;
    letter-spacing: -0.3px;
    margin-bottom: 1.2rem;
  `,
};
