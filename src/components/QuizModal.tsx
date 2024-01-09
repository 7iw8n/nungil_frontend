import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const container = css`
  width: 100%;
  height: 60%;
  flex-shrink: 0;
  border-radius: 20px 20px 0px 0px;
`;

const title = css``;

const middle = css``;

const middletitle = css``;

const middlecon = css``;

const bottombtn = css``;

const cancelbtn = css``;

const QuizModal = () => {
  return (
    <div css={container} className="QuizModal">
      <div css={top} className="Top">
        <div css={title} className="Title">
          <span>님에게</span>
          <br />
          <span>를 선물하세요🎁</span>
        </div>
      </div>
      <div css={middle} className="Middle">
        <div css={middletitle} className="MiddleTitle">
          <span>님께서 퀴즈를 출제했어요.</span>
        </div>
        <div css={middlecon} className="MiddleContent">
          <span></span>
        </div>
        <div className="bottom">
          <Link to="/QuizA">
            <button css={bottombtn}>퀴즈 풀러 가기</button>
          </Link>
          <button css={cancelbtn} onClick={closeModal}>
            다음에 풀기
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizModal;
