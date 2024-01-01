import { atom } from 'recoil';

interface PresentPlaceInfoType {
  address: string;
  latitude: number;
  longitude: number;
  placeName: string;
  placePasswd: string;
  placeDescription: string;
  placeProvider: string;
  quiz: string;
  quizAnswer: string;
}

const PresentPlaceInfo = atom<PresentPlaceInfoType>({
  key: 'PresentPlaceInfo',
  default: {
    address: '',
    latitude: 0,
    longitude: 0,
    placeName: '',
    placePasswd: '',
    placeDescription: '',
    placeProvider: '',
    quiz: '',
    quizAnswer: '',
  },
});

export { PresentPlaceInfo };
