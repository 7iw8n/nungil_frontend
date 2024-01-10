import { useState, useEffect, useCallback } from 'react';
import { css } from '@emotion/react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { UserId } from '../states/userState';
import { PresentPlaceInfo } from '../states/presentMapState';
import MapContainer from '../components/MapContainer';
import arrow from '../assets/imgs/ArrowLeft.png';
import presentpin from '../assets/imgs/PresentPin.png';

const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: #ffffff;
  z-index: 1;
  position: relative;
`;

const top = css`
  width: 100%;
  height: 6.1rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  flex-shrink: 0;
  gap: 20px;
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
  z-index: 2;
  background-color: #ffffff;
`;

const backbtn = css`
  width: 2.4rem;
  height: 2.4rem;
  padding-left: 21px;
  text-align: center;
  background: #ffffff;
`;

const title = css`
  flex-grow: 1;
  color: #262626;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  text-align: center;
  padding-right: 40px;
`;

const bottom = css`
  height: 26rem;
  padding-left: 28px;
  border-radius: 20px 20px 0px 0px;
  flex-shrink: 0;
  background-color: #ffffff;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

const bottomtitle = css`
  color: #262626;
  font-size: 18px;
  font-weight: 600;
  padding-top: 40px;
  padding-bottom: 30px;
`;

const addressbox = css`
  padding-bottom: 20px;
`;

const addresscon = css`
  display: flex;
  width: 38rem;
  height: 4.6rem;
  padding: 14px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border: none;
  border-radius: 10px;
  background: #fafafa;
  color: #909090;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 600;
`;

const bottombtn = css`
  display: flex;
  width: 37rem;
  height: 4.6rem;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #fa7268;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
`;

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  const navigator = useNavigate();
  const userId = useRecoilValue(UserId);
  const presentPlaceInfo = useRecoilValue(PresentPlaceInfo);
  const [map, setMap] = useState<any>(null);

  const handleMapLoad = useCallback((mapInstance: any) => {
    setMap(mapInstance);
  }, []);

  useEffect(() => {
    if (map && presentPlaceInfo.latitude && presentPlaceInfo.longitude) {
      const { latitude, longitude } = presentPlaceInfo;

      const centerPosition = new window.kakao.maps.LatLng(latitude, longitude);

      const imageSrc = presentpin;
      const imageSize = new window.kakao.maps.Size(35, 44);
      const imageOption = { offset: new window.kakao.maps.Point(27, 69) };
      const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

      const newMarker = new window.kakao.maps.Marker({
        position: centerPosition,
        image: markerImage,
      });
      newMarker.setMap(map);

      const bounds = new window.kakao.maps.LatLngBounds();
      bounds.extend(centerPosition);
      map.setBounds(bounds);

      console.log(centerPosition);
    }
  }, [map, presentPlaceInfo]);

  const handleButtonClick = () => {
    navigator(`/${userId}`);
  };

  return (
    <div css={container} className="Map">
      <MapContainer onMapLoad={handleMapLoad} setMap={setMap} />
      <div css={top} className="Top">
        <button css={backbtn} onClick={handleButtonClick}>
          <img src={arrow} />
        </button>
        <span css={title}>주소 지정하기</span>
      </div>
      <div css={bottom} className="Bottom">
        <div css={bottomtitle} className="BottomTile">
          <span>내가 선물할 장소의 주소는 여기예요!</span>
        </div>
        <div css={addressbox} className="AddressBox">
          <span css={addresscon}>{presentPlaceInfo.address}</span>
        </div>
        <div className="BottomBtn">
          <Link to="/PlaceName">
            <button css={bottombtn}>이 위치로 정할게요</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Map;
