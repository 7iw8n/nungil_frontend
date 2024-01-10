import { useEffect, useState } from 'react';
import axios from 'axios';
import { css } from '@emotion/react';
import { Link, useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { PresentPlaceInfo, PresentPlaceInfoType } from '../states/presentMapState';
import { UserId } from '../states/userState.ts';
import { UserName, PlaceTheme } from '../states/createMapState.ts';
import MapContainer from '../components/MapContainer';
import StartModal from '../components/StartModal';
import add from '../assets/imgs/AddBox.png';
import locationimg from '../assets/imgs/Location.png';
import BeginningModal from '../components/BeginningModal';
import presentpin from '../assets/imgs/PresentPin.png';
import { api } from '../apis/axiosInstance';
import {
  PlaceInfo,
  PlaceInfoType,
  ShowBeginModalAtom,
  ShowLetterAtom,
  ShowQuizModalAtom,
} from '../states/mapState';
import { IconMarker } from '../assets/svgs';
import styled from '@emotion/styled';
import ShowQuizModal from '../components/ShowQuizModal';
import ShowLetter from '../components/ShowLetter';
import { useGeoLocation } from '../hooks/useGeoLocation';

const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: #ffffff;
  z-index: 1;
  position: relative;
`;

const top = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
`;

const inputaddress = css`
  width: 77%;
  height: 4.6rem;
  border-radius: 10px;
  position: absolute;
  top: 2rem;
  left: 1.5rem;
  z-index: 2;
  color: #505050;
  padding-left: 19px;
  font-size: 1.5rem;
  font-weight: 600;
`;

const locationbtn = css`
  width: 4.6rem;
  height: 4.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 2rem;
  right: 2rem;
  background-color: #262626;
  border-radius: 10px;
  z-index: 2;
`;

const CountBox = styled.div`
  width: 6.7rem;
  height: 3.2rem;
  border-radius: 20px;
  background-color: #303030;
  position: absolute;
  bottom: 9rem;
  right: 1.5rem;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.3rem;
  gap: 0.6rem;
  cursor: pointer;
`;

const addbox = css`
  width: 6rem;
  height: 6rem;
  flex-shrink: 0;
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.1)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.09))
    drop-shadow(0px 10px 6px rgba(0, 0, 0, 0.05)) drop-shadow(0px 18px 7px rgba(0, 0, 0, 0.01))
    drop-shadow(0px 28px 8px rgba(0, 0, 0, 0));
  position: absolute;
  bottom: 1.8rem;
  right: 1.8rem;
  z-index: 1;
  cursor: pointer;
`;

const modalbox = css`
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 3;
  background-color: #ffffff;
  border-radius: 20px 20px 0px 0px;
`;

const overlay = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const MainPage = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [map, setMap] = useState<any>(null);
  const [showBeginningModal, setShowBeginningModal] = useRecoilState(ShowBeginModalAtom);
  const [inputValue, setInputValue] = useState<string>('');
  const [marker, setMarker] = useState<any>(null);
  const [addressInfo, setAddressInfo] = useRecoilState(PresentPlaceInfo);
  const [placeList, setPlaceList] = useState<PlaceInfoType[]>([]);
  const [, setUserId] = useRecoilState(UserId);
  const [, setUserName] = useRecoilState(UserName);
  const [, setPlaceTheme] = useRecoilState(PlaceTheme);
  const { userId } = useParams();
  const [count, setCount] = useState<number>(0);
  const [, setPlaceInfo] = useRecoilState(PlaceInfo);
  const [placeId, setPlaceId] = useState(0);
  const [isShowQuiz, setIsShowQuiz] = useRecoilState(ShowQuizModalAtom);
  const [isShowLetter, setIsShowLetter] = useRecoilState(ShowLetterAtom);
  const geolocationOptions = {
    enableHighAccuracy: true,
    timeout: 1000,
    maximumAge: 1000 * 3600 * 24,
  };
  const { location, error } = useGeoLocation(geolocationOptions);

  const handleAddBoxClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleLocationBtnClick = () => {
    if (navigator.geolocation && map) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          map.setCenter(new window.kakao.maps.LatLng(latitude, longitude));
        },
        () => {
          console.error('위치 정보를 가져오는 데 실패했습니다.');
        },
      );
    }
  };

  const handleAddressInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddressChange = () => {
    if (marker) {
      marker.setMap(null);
    }

    // 카카오맵 주소 검색 API 연동
    if (inputValue.trim() !== '') {
      const apiUrl = `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(
        inputValue,
      )}`;

      if (window.kakao && window.kakao.maps) {
        axios
          .get(apiUrl, {
            headers: {
              Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_API_KEY}`,
            },
          })
          .then((response) => {
            const data = response.data;
            if (data && data.documents && data.documents.length > 0) {
              const firstResult = data.documents[0];
              if (firstResult.address) {
                const { x, y } = firstResult.address;

                setAddressInfo((prev) => ({
                  ...prev,
                  address: inputValue,
                  latitude: y,
                  longitude: x,
                }));

                console.log(addressInfo);

                // 검색된 주소의 좌표로 지도 이동
                const centerPosition = new window.kakao.maps.LatLng(y, x);
                map.setCenter(centerPosition);

                const imageSrc = presentpin;
                const imageSize = new window.kakao.maps.Size(35, 44); // 마커이미지의 크기입니다
                const imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

                const markerImage = new window.kakao.maps.MarkerImage(
                  imageSrc,
                  imageSize,
                  imageOption,
                );

                const newMarkerPosition = centerPosition;
                const newMarker = new window.kakao.maps.Marker({
                  position: newMarkerPosition,
                  image: markerImage,
                });
                newMarker.setMap(map);
                setMarker(newMarker);
              } else {
                console.error('주소를 찾을 수 없습니다.');
              }
            }
          })
          .catch((error) => {
            console.error('API 요청 중 오류가 발생했습니다:', error);
          });
      }
    }
  };

  const handleEnterKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddressChange(inputValue);
    }
  };

  useEffect(() => {
    console.log('userId is ', userId);

    if (userId) {
      getPlaces();
      getInfoAndPlaceCount(userId);
      setUserId(parseInt(userId));
      console.log(userId);
    }
    if (window.kakao && window.kakao.maps && map) {
      // 사용자의 현재 위치를 얻는 함수
      const getCurrentLocation = (callback) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const currentLocation = new window.kakao.maps.LatLng(
                position.coords.latitude,
                position.coords.longitude,
              );
              callback(currentLocation);
            },
            (error) => {
              console.error('Geolocation error:', error);
              // 위치 정보를 얻을 수 없는 경우에 대한 처리
            },
          );
        } else {
          console.error('Geolocation is not supported by this browser.');
          // 브라우저에서 Geolocation을 지원하지 않는 경우에 대한 처리
        }
      };
      getCurrentLocation((currentLocation) => {
        map.setCenter(currentLocation);

        placeList.forEach((place) => {
          const coords = new window.kakao.maps.LatLng(place.latitude, place.longitude);

          // 이미지 URL을 사용하여 마커 이미지를 생성
          const markerImage = new window.kakao.maps.MarkerImage(
            '/imgMarker.png',
            new window.kakao.maps.Size(20, 30), // 이미지 크기 지정
          );

          // 마커 생성 및 이미지 설정
          const marker = new window.kakao.maps.Marker({
            position: coords,
            image: markerImage, // 마커에 이미지 설정
          });
          // 마커 객체에 metadata로 placeId를 추가
          marker.metadata = { placeId: place.placeId };

          // 마커에 클릭 이벤트 리스너를 추가
          window.kakao.maps.event.addListener(marker, 'click', (e) => {
            // 클릭한 마커의 placeId를 처리합
            setPlaceId(place.placeId);
            setPlaceInfo(place);
            clickMarker();
          });

          // 지도에 마커를 표시합니다.
          marker.setMap(map);
        });
      });
    }
  }, [map, userId]); // map이 변경될 때마다 마커를 업데이트

  const getPlaces = async () => {
    try {
      const { data } = await api.get(`/api/user/${userId}/places`);
      setPlaceList(data);
      console.log(data);
    } catch {}
  };

  const getInfoAndPlaceCount = async (userId: any) => {
    try {
      const { data } = await api.get(`/api/user/${userId}/places/info`);
      setCount(data.placeCount);
      setUserName(data.userName);
      setPlaceTheme(data.placeTheme);
    } catch (error) {
      console.error('API 요청 중 오류가 발생했습니다:', error);
    }
  };

  //핀 클릭 했을 때
  useEffect(() => {
    clickMarker();
  }, [placeId, isShowLetter]);
  const clickMarker = () => {
    if (placeId === 0) return;
    const bool = placeList.find((place) => place.placeId === placeId)?.isQuiz;
    if (bool) {
      setIsShowQuiz(1);
      setIsShowLetter(false);
    } else {
      setIsShowLetter(true);
      setIsShowQuiz(0);
    }
  };

  return (
    <div css={container} className="Container">
      <MapContainer setMap={setMap} onAddressChange={handleAddressChange} />
      <div css={top} className="Top">
        <input
          css={inputaddress}
          placeholder="주소를 입력하세요."
          value={inputValue}
          onChange={handleAddressInputChange}
          onKeyDown={handleEnterKeyPress}
        ></input>
        <button css={locationbtn} onClick={handleLocationBtnClick}>
          <img src={locationimg} />
        </button>
      </div>
      <CountBox>
        <IconMarker />
        {count}개
      </CountBox>
      <button onClick={handleAddBoxClick}>
        <img css={addbox} src={add} />
      </button>
      <div className="Modal">
        {modalOpen && (
          <>
            <div css={overlay} onClick={closeModal} />
            <div css={modalbox} className="ModalBox">
              <StartModal setModalOpen={setModalOpen} count={count} />
            </div>
          </>
        )}
      </div>
      {showBeginningModal && !isShowLetter && (
        <BeginningModal setShowModal={setShowBeginningModal} />
      )}
      {isShowQuiz === 1 ? (
        <ShowQuizModal placeId={placeId} />
      ) : isShowLetter ? (
        <ShowLetter />
      ) : null}
    </div>
  );
};

export default MainPage;
