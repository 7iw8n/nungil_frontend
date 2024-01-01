import { useState } from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import FinishModal from '../components/FinishModal';
import arrow from '../assets/imgs/ArrowLeft.png';

const container = css`
  width: 393px;
  height: 100vh;
  background: #ffffff;
  z-index: 1;
  position: relative;
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

const detail = css`
  color: #909090;
  font-family: Pretendard;
  font-size: 11px;
  font-weight: 500;
`;

const bottom = css`
  width: 100%;
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

const modalbox = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  background-color: #ffffff;
  border-radius: 26px;
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

const Nickname = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleFinishClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div css={container} className="Nickname">
      <div css={top} className="Top">
        <Link to="/QuizQ">
          <button css={backbtn}>
            <img src={arrow} />
          </button>
        </Link>
      </div>
      <div css={middle} className="Middle">
        <div css={title} className="Title">
          <span>닉네임 입력하기</span>
        </div>
        <div css={subtitle} className="Subtitle">
          <span>장소를 추천할 때 쓰일 닉네임을 입력해주세요.</span>
          <br />
          <span>입력하신 닉네임은 타인에게 보이게 돼요.</span>
        </div>
        <input type="text" css={inputbox} placeholder="닉네임을 입력하세요." />
        <br />
        <span css={detail}>*최대 8자까지</span>
      </div>
      <div css={bottom} className="Bottom">
        <button css={bottombtn} onClick={handleFinishClick}>
          장소 선물 완료하기
        </button>
        <div className="Modal">
          {modalOpen && (
            <>
              <div css={overlay} onClick={closeModal} />
              <div css={modalbox} className="ModalBox">
                <FinishModal setModalOpen={setModalOpen} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nickname;
