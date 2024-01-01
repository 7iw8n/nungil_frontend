import styled from '@emotion/styled';
import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { UserName } from '../../states/createMapState';

const InputNickname = () => {
  const [name, setName] = useRecoilState(UserName);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const updatedName = event.target.value.replace(/\s+/g, '').slice(0, 8);
    setName(updatedName);
  };
  return (
    <St.Container>
      <St.Input
        type="text"
        placeholder="닉네임을 입력하세요."
        value={name}
        onChange={handleInput}
      ></St.Input>
      <p css={{ color: '#909090', fontSize: '1.1rem' }}>* 최대 8자까지</p>
    </St.Container>
  );
};

export default InputNickname;

const St = {
  Container: styled.div`
    width: 100%;
  `,
  Input: styled.input`
    width: 100%;
    height: 4.5rem;
    padding: 1rem 1.5rem;
    margin: 1rem 0;
    border-radius: 10px;
    border: 1px solid #f1f1f1;
    background: #fafafa;
    font-size: 1.4rem;

    &:placeholder-shown {
      color: #909090;
      font-family: Pretendard;
      font-size: 1.4rem;
    }
  `,
};
