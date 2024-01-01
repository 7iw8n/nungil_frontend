import { useRef, useEffect } from 'react';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { PresentPlaceInfo } from '../states/presentMapState';
import { UserId } from '../states/userState';
import box from '../assets/imgs/Box.png';

const container = css`
  width: 235px;
  height: 169px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 26px;
  background-color: #ffffff;
`;

const top = css``;

const middle = css``;

const title = css`
  color: #262626;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 7px;
`;

const subtitle = css`
  color: #9b9b9b;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  padding-bottom: 35px;
`;

const bottom = css`
  padding-bottom: 20px;
`;

const bottombtn = css`
  background-color: #ffffff;
  color: #fa7268;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
`;

interface PropsType {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FinishModal = ({ setModalOpen }: PropsType) => {
  const { placeProvider } = useRecoilValue(PresentPlaceInfo);
  const userId = useRecoilValue(UserId);
  const modalRef = useRef<HTMLDivElement>(null);

  const navigator = useNavigate();

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      // 모달 외부 영역 클릭 시 모달창 사라짐
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);
    // document.addEventListener('touchstart', handler); // 모바일 코드

    return () => {
      document.removeEventListener('mousedown', handler);
      // document.removeEventListener('touchstart', handler); // 모바일 코드
    };
  }, [setModalOpen]);

  const handleButtonClick = () => {
    navigator(`/${userId}`);
  };

  return (
    <div ref={modalRef} css={container} className="StartModal">
      <div css={top} className="Top"></div>
      <div css={middle} className="Middle">
        <div css={title} className="Title">
          <span>장소 선물 완료</span>
        </div>
        <div css={subtitle} className="Subtitle">
          <span>{placeProvider} 님에게 전달 완료했어요.</span>
        </div>
      </div>
      <div css={bottom} className="bottom">
        <button css={bottombtn} onClick={handleButtonClick}>
          확인
        </button>
      </div>
    </div>
  );
};

export default FinishModal;
