import { useState } from 'react';
import axios from 'axios';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { PresentPlaceInfo, PresentPlaceInfoType } from '../states/presentMapState';
import MapContainer from '../components/MapContainer';
import StartModal from '../components/StartModal';
import add from '../assets/imgs/AddBox.png';
import location from '../assets/imgs/Location.png';
import presentpin from '../assets/imgs/PresentPin.png';

const container = css`
  width: 393px;
  height: 100vh;
  background: #ffffff;
  z-index: 1;
  position: relative;
`;

const top = css`
  display: flex;
  flex-direction: row;
`;

const inputaddress = css`
  width: 301px;
  height: 45px;
  border-radius: 10px;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 2;
  color: #505050;
  padding-left: 19px;
  font-size: 15px;
  font-weight: 600;
`;

const locationbtn = css`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  left: 330px;
  background-color: #262626;
  border-radius: 10px;
  z-index: 2;
`;

const addbox = css`
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.1)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.09))
    drop-shadow(0px 10px 6px rgba(0, 0, 0, 0.05)) drop-shadow(0px 18px 7px rgba(0, 0, 0, 0.01))
    drop-shadow(0px 28px 8px rgba(0, 0, 0, 0));
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1;
  cursor: pointer;
`;

const modalbox = css`
  position: absolute;
  bottom: 0;
  z-index: 3;
  background-color: #ffffff;
  border-radius: 20px 20px 0px 0px;
`;

const overlay = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const MainPage = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [map, setMap] = useState<any>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [marker, setMarker] = useState<any>(null);
  const [presentMarkers, setPresentMarkers] = useState<any[]>([]);
  const [addressInfo, setAddressInfo] = useRecoilState(PresentPlaceInfo);

  const handleAddBoxClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleLocationBtnClick = () => {
    if (navigator.geolocation && map) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          map.setCenter(new window.kakao.maps.LatLng(latitude, longitude));
        },
        () => {
          console.error('위치 정보를 가져오는 데 실패했습니다.');
        },
      );
    }
  };

  const handleAddressInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddressChange = () => {
    if (marker) {
      marker.setMap(null);
    }

    // 카카오맵 주소 검색 API 연동
    if (inputValue.trim() !== '') {
      const apiUrl = `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(
        inputValue,
      )}`;

      if (window.kakao && window.kakao.maps) {
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

                setAddressInfo((prev) => ({
                  ...prev,
                  address: inputValue,
                  latitude: y,
                  longitude: x,
                }));

                console.log(addressInfo);

                // 검색된 주소의 좌표로 지도 이동
                const centerPosition = new window.kakao.maps.LatLng(y, x);
                map.setCenter(centerPosition);

                const imageSrc = presentpin;
                const imageSize = new window.kakao.maps.Size(35, 44); // 마커이미지의 크기입니다
                const imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

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
    }
  };

  const handleEnterKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddressChange(inputValue);
    }
  };

  return (
    <div className="Main">
      <div css={container} className="Container">
        <MapContainer setMap={setMap} onAddressChange={handleAddressChange} />
        <div css={top} className="Top">
          <input
            css={inputaddress}
            placeholder="주소를 입력하세요."
            value={inputValue}
            onChange={handleAddressInputChange}
            onKeyDown={handleEnterKeyPress}
          ></input>
          <button css={locationbtn} onClick={handleLocationBtnClick}>
            <img src={location} />
          </button>
        </div>
        <button onClick={handleAddBoxClick}>
          <img css={addbox} src={add} />
        </button>
        <div className="Modal">
          {modalOpen && (
            <>
              <div css={overlay} onClick={closeModal} />
              <div css={modalbox} className="ModalBox">
                <StartModal setModalOpen={setModalOpen} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
