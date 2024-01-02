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
  padding-top: 21px;
  padding-left: 29px;
`;

const qmark = css`
  color: #e0e0e0;
  padding-bottom: 13px;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.3px;
`;

const title = css`
  color: #262626;
  padding-bottom: 17px;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -1px;
`;

const inputbox = css`
  display: flex;
  width: 338px;
  height: 45px;
  padding: 8px 16px;
  margin-top: 7px;
  margin-bottom: 26px;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid #f1f1f1;
  background: #fafafa;
  font-size: 1.4rem;
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

const QuizA = () => {
  return (
    <div css={container} className="Quiz">
      <div css={top} className="Top">
        <button css={backbtn}>
          <img src={arrow} />
        </button>
      </div>
      <div css={middle} className="Middle">
        <div css={qmark} className="Qmark">
          Q.
        </div>
        <div css={title} className="Title">
          <span>퀴즈 내용</span>
        </div>
        <div className="AnswerBox">
          <input type="text" css={inputbox} placeholder="정답을 입력하세요." />
        </div>
      </div>
      <div css={bottom} className="Bottom">
        <Link to="/MainPage">
          <button css={bottombtn}>답변 제출하기</button>
        </Link>
      </div>
    </div>
  );
};

export default QuizA;
