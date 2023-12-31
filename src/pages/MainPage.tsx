import { useState, useRef } from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import MapContainer from '../components/MapContainer';
import StartModal from '../components/StartModal';
import add from '../assets/imgs/AddBox.png';

const container = css`
  width: 393px;
  height: 100vh;
  background: #ffffff;
  position: relative;
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

const modal = css`
  position: relative;
`;

const modalbox = css`
  position: absolute;
  bottom: 0;
  z-index: 999;
  background-color: #ffffff;
  border-radius: 20px 20px 0px 0px;
`;

const MainPage = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const modalBackground = useRef();

  const handleAddBoxClick = () => {
    setModalOpen(true);
  };

  return (
    <div className="Main">
      <div css={container} className="Container">
        <MapContainer />
        <input css={inputaddress} placeholder="주소를 입력하세요."></input>
        <button onClick={handleAddBoxClick}>
          <img css={addbox} src={add} />
        </button>
        <div css={modal} className="Modal">
          {modalOpen && (
            <div css={modalbox} className="ModalBox">
              <StartModal setModalOpen={setModalOpen} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
