import { useRef, useEffect } from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import box from '../assets/imgs/Box.png';

const container = css`
  width: 393px;
  padding-left: 28px;
`;

const top = css`
  display: flex;
  flex-direction: column;
  padding-top: 35px;
`;

const middle = css``;

const title = css`
  color: #262626;
  padding-bottom: 13px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: -1px;
`;

const subtitle = css`
  color: #909090;
  padding-bottom: 34px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.5px;
`;

const middletitle = css`
padding-bottom: 9px;
color: #505050
font-size: 15px;
font-weight: 700;
letter-spacing: -0.5px;
`;

const middlecon = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  line-height: 17px;
  padding-bottom: 32px;
`;

const middlecontop = css`
  color: #707070;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.3px;
`;

const middleconbtm = css`
  color: #262626;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.3px;
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

const cancelbtn = css`
  display: flex;
  width: 338px;
  height: 45px;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  color: #c5c5c5;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
`;

interface PropsType {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const StartModal = ({ setModalOpen }: PropsType) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 이벤트 핸들러 함수
    const handler = (event: MouseEvent) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setModalOpen(false);
      }
    };

    // 이벤트 핸들러 등록
    document.addEventListener('mousedown', handler);
    // document.addEventListener('touchstart', handler); // 모바일 대응

    return () => {
      // 이벤트 핸들러 해제
      document.removeEventListener('mousedown', handler);
      // document.removeEventListener('touchstart', handler); // 모바일 대응
    };
  }, [setModalOpen]);

  return (
    <div ref={modalRef} css={container} className="StartModal">
      <div css={top} className="Top">
        <div css={title} className="Title">
          <span>님에게</span>
          <br />
          <span>를 선물하세요🎁</span>
        </div>
        <div css={subtitle} className="Subtitle">
          <span>해당 테마에 어울리는 당신만의 장소를 선물하세요!</span>
          <br />
          <span>추억이 담긴 장소, 나만 아는 아지트 등 무엇이든 좋아요.</span>
        </div>
      </div>
      <div css={middle} className="Middle">
        <div css={middletitle} className="MiddleTitle">
          <span>지금까지 선물된 장소</span>
        </div>
        <div css={middlecon} className="MiddleContent">
          <img src={box}></img>
          <div className="MiddleContentSpan">
            <span css={middlecontop}>지금까지 님에게 선물된 장소는</span>
            <br />
            <span css={middleconbtm}>총 곳이에요!</span>
          </div>
        </div>
        <div className="bottom">
          <Link to="/Map">
            <button css={bottombtn}>장소 선물 시작하기</button>
          </Link>
          <button css={cancelbtn}>다음에 선물하기</button>
        </div>
      </div>
    </div>
  );
};

export default StartModal;
