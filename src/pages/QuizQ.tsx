import { css } from '@emotion/react';
import { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { PresentPlaceInfo } from '../states/presentMapState';
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
  margin-top: 7px;
  margin-bottom: 26px;
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
        <div className="QuizBox">
          <div className="Question">
            <span css={subtitle}>문제</span>
            <input
              type="text"
              css={inputbox}
              placeholder="문제를 입력하세요."
              onChange={handleQInput}
            />
          </div>
          <div className="Answer">
            <span css={subtitle}>정답</span>
            <input
              type="text"
              css={inputbox}
              placeholder="문제의 정답을 입력하세요."
              onChange={handleAInput}
            />
          </div>
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
