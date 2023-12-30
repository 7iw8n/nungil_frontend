import { atom } from 'recoil';

const UserName = atom({
  key: 'UserName', // 고유한 키
  default: '', // 기본값
});

const PlaceTheme = atom({
  key: 'PlaceTheme',
  default: '',
});

export { UserName, PlaceTheme };
