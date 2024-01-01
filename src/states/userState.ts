import { atom } from 'recoil';

const UserId = atom({
  key: 'UserId', // 고유한 키
  default: 0, // 기본값
});

export { UserId };
