import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import MapContainer from '../components/MapContainer';
import arrow from '../assets/imgs/ArrowLeft.png';

const container = css`
  width: 393px;
  height: 100vh;
  background: #ffffff;
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
  height: 65%;
  color: #262626;
  font-size: 24px;
  font-weight: 700;
`;

const bottom = css`
  height: 27%;
  padding-left: 28px;
  padding-top: 31px;
  padding-bottom: 27px;
  border-radius: 20px 20px 0px 0px;
  flex-shrink: 0;
`;

const bottomtitle = css`
  color: #262626;
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 16px;
`;

const addressbox = css`
  padding-bottom: 10px;
`;

const address = css`
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
        <MapContainer />
      </div>
      <div css={bottom} className="Bottom">
        <div css={bottomtitle} className="BottomTile">
          <span>내가 선물할 장소의 주소는 여기예요!</span>
        </div>
        <div css={addressbox} className="AddressBox">
          <input css={address}></input>
        </div>
        <div className="BottomBtn">
          <Link to="/Phrase">
            <button css={bottombtn}>이 위치로 정할게요</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Map;
