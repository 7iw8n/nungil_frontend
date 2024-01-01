import { atom } from 'recoil';

interface PlaceInfoType {
  address: string;
  isQuiz: boolean;
  latitude: number;
  longitude: number;
  placeId: number;
  placeName: string;
  placeDescription: string;
  placeProvider: string;
}

const PlaceInfo = atom<PlaceInfoType>({
  key: 'PlaceInfo', // 고유한 키
  default: {
    address: '',
    isQuiz: false,
    latitude: 0,
    longitude: 0,
    placeId: 0,
    placeName: '',
    placeDescription: '',
    placeProvider: '',
  }, // 기본값
});

const ShowQuizModalAtom = atom({
  key: 'ShowQuizModalAtom',
  default: false,
});

const ShowLetterAtom = atom({
  key: 'ShowLetterAtom',
  default: false,
});

export { PlaceInfo, ShowQuizModalAtom, ShowLetterAtom };
