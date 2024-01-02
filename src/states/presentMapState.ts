import { atom } from 'recoil';

export interface PresentPlaceInfoType {
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

export const PresentPlaceInfo = atom<PresentPlaceInfoType>({
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
