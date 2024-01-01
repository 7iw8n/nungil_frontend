import { useEffect } from 'react';
import { css } from '@emotion/react';
import basicpin from '../assets/imgs/BasicPin.png';

declare global {
  interface Window {
    kakao: any;
  }
}

interface MapContainerProps {
  onMapLoad: (map: any) => void;
  setMap: (map: any) => void;
}

const container = css`
  width: 100%;
  height: 100%;
`;

export default function MapContainer({ onMapLoad, setMap }: MapContainerProps) {
  useEffect(() => {
    const mapScript = document.createElement('script');

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAO_MAP_KEY
    }&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const mapOption = {
          center: new window.kakao.maps.LatLng(37.4964, 126.9546),
          level: 3,
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        setMap(map);

        if (onMapLoad) {
          onMapLoad(map);
        }
      });
    };
    mapScript.addEventListener('load', onLoadKakaoMap);
  }, [onMapLoad, setMap]);

  return <div id="map" css={container} />;
}