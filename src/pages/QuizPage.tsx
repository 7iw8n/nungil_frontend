import styled from '@emotion/styled';
import { IconArrowLeft, IconQ } from '../assets/svgs/index.ts';
import { useState, ChangeEvent, useEffect } from 'react';
import { api } from '../apis/axiosInstance.ts';
import theme from '../styles/theme.ts';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { ShowLetterAtom } from '../states/mapState.ts';

interface quizType {
  quiz: string;
  quizAnswer: string;
  quizAnswerCount: number;
  quizHint: string;
}

const QuizPage = () => {
  //recoil
  const [, setIsShowLetter] = useRecoilState(ShowLetterAtom);

  const { userId, placeId } = useParams();

  const [answer, setAnswer] = useState('');
  const [quizInfo, setQuizInfo] = useState<quizType>({
    quiz: '',
    quizAnswer: '',
    quizAnswerCount: 0,
    quizHint: '',
  });
  const [isCorrect, setIsCorrect] = useState(0);
  const navigator = useNavigate();

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  const getQuiz = async () => {
    try {
      const { data } = await api.get(`/api/user/places/${placeId}/quiz`);
      setQuizInfo(data);
    } catch {
      (err: ErrorEvent) => {
        console.log(err);
      };
    }
  };

  useEffect(() => {
    getQuiz();
  }, []);

  const { quiz, quizAnswer, quizAnswerCount, quizHint } = quizInfo;

  const correctAnswer = () => {
    setIsShowLetter(true);
    navigator(`/${userId}`);
  };

  const checkAnswer = () => {
    quizAnswer === answer ? correctAnswer() : setIsCorrect(2);
  };
  return (
    <St.Container>
      <St.TopSection>
        <IconArrowLeft
          onClick={() => {
            navigator(-1);
          }}
        />
      </St.TopSection>
      <St.MainSection>
        <IconQ css={{ marginBottom: '2rem' }} />
        <M.Title>{quiz}</M.Title>
        <M.Input
          $isCorrect={isCorrect}
          type="text"
          value={answer}
          onChange={handleInput}
          placeholder="정답을 입력하세요"
        ></M.Input>
        {isCorrect === 2 && (
          <M.Hint>
            글자수는 {quizAnswerCount}이고, {quizHint}입니다
          </M.Hint>
        )}
      </St.MainSection>
      <St.BottomSection>
        <St.Button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            checkAnswer();
          }}
        >
          답변 제출하기
        </St.Button>
      </St.BottomSection>
    </St.Container>
  );
};

export default QuizPage;

const St = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    padding: 2.7rem;
    gap: 3.8rem;
  `,
  TopSection: styled.div`
    display: flex;
  `,
  MainSection: styled.article`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: start;
    padding: 0.8rem;
  `,
  BottomSection: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Button: styled.button`
    display: flex;
    width: 33.8rem;
    height: 4.5rem;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.White};
    font-family: Pretendard;
    font-size: 1.4rem;
    font-weight: 700;
  `,
};

const M = {
  Title: styled.p`
    color: #262626;
    font-family: Pretendard;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.3px;
  `,
  Input: styled.input<{ $isCorrect?: number }>`
    width: 18rem;
    border: none;
    border-bottom: 1.5px solid
      ${(props) => (props.$isCorrect === 2 ? theme.colors.Warning_Red : '#909090')};
    padding: 0.5rem 0;
    margin: 1rem 0;
    color: #000;
    font-size: 1.6rem;
    font-weight: 600;
    &:placeholder-shown {
      color: #909090;
      font-weight: 500;
    }

    &:focus {
      border: none;
      border-bottom: 1.5px solid ${({ theme }) => theme.colors.primary};
      outline: none;
    }
  `,
  Hint: styled.div`
    color: #ef4a3e;
    font-family: Pretendard;
    font-size: 1.1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `,
};
