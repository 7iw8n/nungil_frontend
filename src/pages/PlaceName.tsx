import { css } from '@emotion/react';
import { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { PresentPlaceInfo } from '../states/presentMapState';
import arrow from '../assets/imgs/ArrowLeft.png';

const container = css`
  width: 100%;
  height: 100vh;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.7rem;
  gap: 3.8rem;
`;

const top = css`
  display: flex;
`;

const backbtn = css`
  width: 2.4rem;
  height: 2.4rem;
  text-align: center;
`;

const middle = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: start;
  padding: 0.8rem;
`;

const title = css`
  font-family: Pretendard;
  color: #262626;
  padding-bottom: 1.7rem;
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: -0.1rem;
`;

const subtitle = css`
  font-family: Pretendard;
  color: #909090;
  padding-bottom: 1.6rem;
  font-size: 1.4rem;
  line-height: 1.5;
  letter-spacing: -0.5px;
`;

const inputbox = css`
  display: flex;
  width: 100%;
  height: 4.5rem;
  padding: 1rem 1.5rem;
  margin: 1rem 0;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid #f1f1f1;
  background: #fafafa;
  font-size: 1.4rem;
  font-family: Pretendard;
  line-height: normal;
`;

const detail = css`
  color: #909090;
  font-family: Pretendard;
  font-size: 1.1rem;
  font-weight: 500;
`;

const bottom = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const bottombtn = css`
  display: flex;
  width: 33.8rem;
  height: 4.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #fa7268;
  color: #ffffff;
  text-align: center;
  font-size: 1.4rem;
  font-family: Pretendard;
`;

const PlaceName = () => {
  const [, setPresentPlaceName] = useRecoilState(PresentPlaceInfo);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const updatedPlaceName = event.target.value;
    setPresentPlaceName((prevPlaceInfo: any) => ({
      ...prevPlaceInfo,
      placeName: updatedPlaceName,
    }));
  };

  return (
    <div css={container} className="PlaceName">
      <div css={top} className="Top">
        <Link to="/Map">
          <button css={backbtn}>
            <img src={arrow} />
          </button>
        </Link>
      </div>
      <div css={middle} className="Middle">
        <div css={title} className="Title">
          <span>장소의 이름을 정해주세요</span>
        </div>
        <div css={subtitle} className="Subtitle">
          <span>지정하신 장소를 부를 이름을 정해주세요.</span>
          <br />
          <span>ex. 숭실대 조만식기념관 옆 나무계단</span>
        </div>
        <input
          type="text"
          css={inputbox}
          placeholder="장소의 이름을 입력하세요."
          onChange={handleInput}
        />
        <br />
        <span css={detail}>*정해주신 장소의 이름이 지도 상에서 보이게 돼요.</span>
      </div>
      <div css={bottom} className="Bottom">
        <Link to="/Phrase">
          <button css={bottombtn}>다음으로</button>
        </Link>
      </div>
    </div>
  );
};

export default PlaceName;
