import { useState, useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import MapContainer from '../components/MapContainer';
import StartModal from '../components/StartModal';
import add from '../assets/imgs/AddBox.png';
import location from '../assets/imgs/Location.png';

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

  return (
    <div className="Main">
      <div css={container} className="Container">
        <MapContainer setMap={setMap} />
        <div css={top} className="Top">
          <input css={inputaddress} placeholder="주소를 입력하세요."></input>
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
