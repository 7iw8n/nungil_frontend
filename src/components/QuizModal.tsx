import { css } from '@emotion/react';

const QuizModal = () => {
  const container = css`
    width: 393px;
    height: 60%;
    flex-shrink: 0;
    border-radius: 20px 20px 0px 0px;
  `;

  return (
    <div css={container} className="QuizModal">
      <div></div>
    </div>
  );
};

export default QuizModal;
