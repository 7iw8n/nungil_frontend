import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import arrow from '../assets/imgs/ArrowLeft.png';

const container = css`
  width: 393px;
  height: 100vh;
  background: #ffffff;
`;

const top = css`
  height: 8%;
  display: flex;
  flex-direction: column;
`;

const backbtn = css`
  width: 24px;
  height: 24px;
  padding-top: 21px;
  padding-left: 21px;
  text-align: center;
  background: #ffffff;
`;

const middle = css`
  height: 81%;
  padding-top: 31px;
  padding-left: 29px;
`;

const title = css`
  color: #262626;
  padding-bottom: 17px;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -1px;
`;

const subtitle = css`
  color: #909090;
  padding-bottom: 25px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.5px;
`;

const inputbox = css`
  display: flex;
  width: 338px;
  height: 45px;
  padding: 8px 16px;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid #f1f1f1;
  background: #fafafa;
`;

const bottom = css`
  height: 11%;
  padding-left: 28px;
  padding-bottom: 27px;
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

const Phrase = () => {
  return (
    <div css={container} className="Phrase">
      <div css={top} className="Top">
        <Link to="/PlaceName">
          <button css={backbtn}>
            <img src={arrow} />
          </button>
        </Link>
      </div>
      <div css={middle} className="Middle">
        <div css={title} className="Title">
          <span>글귀를 작성해주세요</span>
        </div>
        <div css={subtitle} className="Subtitle">
          <span>해당 장소에 얽힌 당신만의 이야기를 남겨주세요.</span>
          <br />
          <span>가벼운 이야기도 좋아요.</span>
        </div>
        <div className="Input">
          <input type="text" css={inputbox} placeholder="이야기를 작성해주세요" />
        </div>
      </div>
      <div css={bottom} className="Bottom">
        <Link to="/QuizQ">
          <button css={bottombtn}>다음으로</button>
        </Link>
      </div>
    </div>
  );
};

export default Phrase;
