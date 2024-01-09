import styled from '@emotion/styled';
import { IconArrowLeft } from '../assets/svgs/index.ts';
import { CREATEMAP } from '../constants/CREATEMAP.ts';
import { useState, useEffect } from 'react';
import InputNickname from '../components/createMapComs/InputNickname.tsx';
import InputPlaceTheme from '../components/createMapComs/InputPlaceTheme.tsx';
import LinkShare from '../components/createMapComs/LinkShare.tsx';
import { useGeoLocation } from '../hooks/useGeoLocation.ts';
import { api } from '../apis/axiosInstance.ts';
import { useRecoilState, useRecoilValue } from 'recoil';
import { UserName, PlaceTheme } from '../states/createMapState.ts';
import { UserId } from '../states/userState.ts';
import { useNavigate } from 'react-router-dom';

interface UserInfoType {
  latitude: number;
  longitude: number;
  placeTheme: string;
  userName: string;
}

interface ApiResponse {
  userId: number;
}

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
};

const CreateMapPage = () => {
  const [stage, setStage] = useState(1);
  const [userInfo, setUserInfo] = useState<UserInfoType | null>(null);
  const { location, error } = useGeoLocation(geolocationOptions); //현재 위치 가져오기
  const userName = useRecoilValue(UserName);
  const placeTheme = useRecoilValue(PlaceTheme);
  const [userId, setUserId] = useRecoilState(UserId);

  const navigator = useNavigate();

  useEffect(() => {
    if (location && location.latitude && location.longitude) {
      const newUserInfo: UserInfoType = {
        latitude: location.latitude,
        longitude: location.longitude,
        placeTheme: placeTheme,
        userName: userName,
      };
      setUserInfo(newUserInfo);
    }
  }, [location, userName, placeTheme]);

  const renderStageComponent = () => {
    switch (stage) {
      case 1:
        return <InputNickname />;
      case 2:
        return <InputPlaceTheme />;
      case 3:
        return <LinkShare userId={userId} />;
      default:
        return null;
    }
  };

  const postUserInfo = async () => {
    if (!userInfo) {
      console.error('위치 정보가 아직 불러와지지 않았습니다.');
      return;
    }
    console.log(userInfo);

    try {
      const { data } = await api.post<ApiResponse>('/api/user/register', userInfo);
      const { userId } = data;
      setUserId(userId);
      setStage(stage + 1);
    } catch {}
  };

  return (
    <St.Container>
      <St.TopSection
        onClick={(e) => {
          e.preventDefault();
          if (stage > 1) {
            setStage(stage - 1);
          }
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
            if (stage === 1) {
              userName ? setStage(stage + 1) : {};
            }
            if (stage === 2) {
              placeTheme ? postUserInfo() : {};
            }
            if (stage === 3) {
              navigator(`/${userId}`);
            }
          }}
        >
          {CREATEMAP[stage].button}
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
    background: #000000;
    font-family: Pretendard;
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
    font-family: Pretendard;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.3px;
    padding-bottom: 1.7rem;
  `,
  Explain: styled.div`
    color: #909090;
    font-family: Pretendard;
    font-size: 1.4rem;
    font-style: normal;
    line-height: 1.8rem;
    letter-spacing: -0.3px;
    padding-bottom: 1.6rem;
  `,
};
