import { css } from '@emotion/react';
import { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { PresentPlaceInfo } from '../states/presentMapState';
import FinishModal from '../components/FinishModal';
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

const PlaceProvider = () => {
  const [, setPresentPlaceProvider] = useRecoilState(PresentPlaceInfo);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const updatedPlaceProvider = event.target.value;
    setPresentPlaceProvider((prevPlaceInfo) => ({
      ...prevPlaceInfo,
      placeProvider: updatedPlaceProvider,
    }));
  };

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
        <input
          type="text"
          css={inputbox}
          placeholder="닉네임을 입력하세요."
          onChange={handleInput}
        />
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

export default PlaceProvider;
