import { Location } from "@/interface/wedding";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = ({ location }: { location: Location }) => {
  const mapContainer = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&autoload=false`;
    script.async = true;

    document.head.appendChild(script);
    //스크립트를 불러온 시점에 노출을 하겠다. 라고 순서보장을 위해 autoload false 처리
    script.onload = () => {
      window.kakao.maps.load(() => {
        const position = new window.kakao.maps.LatLng(
          location.lat,
          location.lng
        );
        const options = {
          center: position,
          level: 3,
        };
        const marker = new window.kakao.maps.Marker({
          position,
        });
        const map = new window.kakao.maps.Map(mapContainer.current, options);
        marker.setMap(map);
      });
    };
  }, [location]);

  return <div id="map" className="w-full h-[300px]" ref={mapContainer}></div>;
};

export default Map;
