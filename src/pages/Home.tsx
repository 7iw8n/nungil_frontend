import { useState } from 'react';
import ShowQuizModal from '../components/ShowQuizModal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { PlaceInfo, ShowLetterAtom, ShowQuizModalAtom } from '../states/mapState';
import { api } from '../apis/axiosInstance';
import ShowLetter from '../components/ShowLetter';

const Home = () => {
  const [placeId] = useState(12);
  const [isShowQuizModal, setIsShowQuizModal] = useRecoilState(ShowQuizModalAtom);
  const isShowLetter = useRecoilValue(ShowLetterAtom);
  const [, setPlaceInfo] = useRecoilState(PlaceInfo);

  const getPlaceInfo = async () => {
    try {
      const { data } = await api.get(`/api/user/${placeId}/place`);
      setPlaceInfo(data);
    } catch {}
  };
  return (
    <div
      css={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'beige',
      }}
    >
      <button
        css={{ width: '100px', height: '100px', backgroundColor: 'red' }}
        onClick={(e) => {
          e.preventDefault();
          setIsShowQuizModal(true);
          getPlaceInfo();
        }}
      />
      {isShowQuizModal && <ShowQuizModal placeId={placeId} />}
      {isShowLetter && <ShowLetter />}
    </div>
  );
};

export default Home;
