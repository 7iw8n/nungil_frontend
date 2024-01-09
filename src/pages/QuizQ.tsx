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

const quizbox = css`
  width: 100%;
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

const QuizQ = () => {
  const [, setPresentQuiz] = useRecoilState(PresentPlaceInfo);
  const [, setPresentAnswer] = useRecoilState(PresentPlaceInfo);

  const handleQInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const updatedQuiz = event.target.value;
    setPresentQuiz((prevPlaceInfo) => ({
      ...prevPlaceInfo,
      quiz: updatedQuiz,
    }));
  };

  const handleAInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const updatedAnswer = event.target.value;
    setPresentAnswer((prevPlaceInfo) => ({
      ...prevPlaceInfo,
      quizAnswer: updatedAnswer,
    }));
  };

  return (
    <div css={container} className="Quiz">
      <div css={top} className="Top">
        <Link to="/Phrase">
          <button css={backbtn}>
            <img src={arrow} />
          </button>
        </Link>
      </div>
      <div css={middle} className="Middle">
        <div css={title} className="Title">
          <span>(선택) 퀴즈를 낼 수 있어요</span>
        </div>
        <div css={subtitle} className="Subtitle">
          <span>상대방이 퀴즈를 맞춰야만 작성하신 글귀를 볼 수 있어요.</span>
          <br />
          <span>퀴즈는 단답식만 가능해요.</span>
        </div>
        <div css={quizbox} className="QuizBox">
          <span css={subtitle}>문제</span>
          <input
            type="text"
            css={inputbox}
            placeholder="문제를 입력하세요."
            onChange={handleQInput}
          />

          <span css={subtitle}>정답</span>
          <input
            type="text"
            css={inputbox}
            placeholder="문제의 정답을 입력하세요."
            onChange={handleAInput}
          />
        </div>
      </div>
      <div css={bottom} className="Bottom">
        <Link to="/PlaceProvider">
          <button css={bottombtn}>다음으로</button>
        </Link>
      </div>
    </div>
  );
};

export default QuizQ;
