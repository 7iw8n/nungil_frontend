import styled from '@emotion/styled';
import { IconArrowLeft } from '../assets/svgs/index.ts';

const CreateMapPage = () => {
  return (
    <St.Container>
      <St.TopSection>
        <IconArrowLeft />
      </St.TopSection>
      <St.MainSection></St.MainSection>
      <St.BottomSection></St.BottomSection>
    </St.Container>
  );
};

export default CreateMapPage;

const St = {
  Container: styled.div`
    display: flex;
    padding: 2.7rem;
  `,
  TopSection: styled.div`
    display: flex;
  `,
  MainSection: styled.article`
    display: flex;
    flex-direction: column;
  `,
  BottomSection: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Button: styled.button`
    width: 3rem;
    height: 3rem;
  `,
};
