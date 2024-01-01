import { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import { AddressState } from '../states/addressState';
import MapContainer from '../components/MapContainer';
import arrow from '../assets/imgs/ArrowLeft.png';
import presentpin from '../assets/imgs/PresentPin.png';

const container = css`
  width: 393px;
  height: 100vh;
  background: #ffffff;
  position: relative;
`;

const top = css`
  height: 8%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const backbtn = css`
  width: 24px;
  height: 24px;
  padding-left: 21px;
  text-align: center;
  background: #ffffff;
`;

const title = css`
  flex-grow: 1;
  text-align: center;
  font-weight: bold;
  padding-right: 40px;
`;

const middle = css`
  height: 92%;
  color: #262626;
  font-size: 24px;
  font-weight: 700;
  position: relative;
  z-index: 1;
`;

const bottom = css`
  height: 27%;
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
  width: 345px;
  height: 45px;
  padding: 14px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border: none;
  border-radius: 10px;
  background: #fafafa;
`;

const bottombtn = css`
  display: flex;
  width: 338px;
  height: 45px;
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
  const address = useRecoilValue(AddressState);
  const [map, setMap] = useState<any>(null);
  const [, setMarker] = useState<any>(null);

  useEffect(() => {
    if (map && address) {
      const apiUrl = `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(
        address,
      )}`;

      axios
        .get(apiUrl, {
          headers: {
            Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_API_KEY}`,
          },
        })
        .then((response) => {
          const data = response.data;
          if (data && data.documents && data.documents.length > 0) {
            const firstResult = data.documents[0];
            if (firstResult.address) {
              const { x, y } = firstResult.address;

              // 검색한 주소의 좌표로 지도 이동
              const centerPosition = new window.kakao.maps.LatLng(y, x);
              map.setCenter(centerPosition);

              const imageSrc = presentpin;
              const imageSize = new window.kakao.maps.Size(35, 44);
              const imageOption = {
                offset: new window.kakao.maps.Point(27, 69),
              };

              const markerImage = new window.kakao.maps.MarkerImage(
                imageSrc,
                imageSize,
                imageOption,
              );

              const newMarkerPosition = centerPosition;
              const newMarker = new window.kakao.maps.Marker({
                position: newMarkerPosition,
                image: markerImage,
              });
              newMarker.setMap(map);
              setMarker(newMarker);
            } else {
              console.error('주소를 찾을 수 없습니다.');
            }
          }
        })
        .catch((error) => {
          console.error('API 요청 중 오류가 발생했습니다:', error);
        });
    }
  }, [map, address]);

  const handleMapLoad = (mapInstance: any) => {
    setMap(mapInstance);
  };

  return (
    <div css={container} className="Map">
      <div css={top} className="Top">
        <Link to="/">
          <button css={backbtn}>
            <img src={arrow} />
          </button>
        </Link>
        <span css={title}>주소 지정하기</span>
      </div>
      <div css={middle} className="Middle">
        <MapContainer onMapLoad={handleMapLoad} map={map} address={address} />
      </div>
      <div css={bottom} className="Bottom">
        <div css={bottomtitle} className="BottomTile">
          <span>내가 선물할 장소의 주소는 여기예요!</span>
        </div>
        <div css={addressbox} className="AddressBox">
          <input css={addresscon}></input>
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
