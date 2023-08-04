import React, { useEffect } from "react";
import Data from "@src/assets/data/data";
declare global {
  interface Window {
    kakao: any;
  }
  const kakao: any;
}
const Maps = () => {
  useEffect(() => {
    let container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.541, 126.986),
      level: 9,
      mapTypeId: kakao.maps.MapTypeId.SKYVIEW,
    };
    const map = new kakao.maps.Map(container, options);
    const customOverlay = new kakao.maps.CustomOverlay({});
    const infowindow = new kakao.maps.InfoWindow({ removable: true });

    for (let i = 0; i < Data?.features?.length; i++) {
      let path: any[] = [];
      let name = Data?.features[i].properties.SIG_KOR_NM;
      for (
        let j = 0;
        j < Data?.features[i]?.geometry?.coordinates[0]?.length;
        j++
      ) {
        path.push(
          new kakao.maps.LatLng(
            Data?.features[i]?.geometry?.coordinates[0][j][1],
            Data?.features[i]?.geometry?.coordinates[0][j][0],
          ),
        );
      }
      // 다각형을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 다각형을 표시합니다

      // 지도에 표시할 다각형을 생성합니다
      let polygon = new kakao.maps.Polygon({
        path: path, // 그려질 다각형의 좌표 배열입니다
        strokeWeight: 2, // 선의 두께입니다
        strokeColor: "#000", // 선의 색깔입니다
        strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: "solid", // 선의 스타일입니다
        fillColor: "#fff", // 채우기 색깔입니다
        fillOpacity: 0.7, // 채우기 불투명도 입니다
      });

      // 지도에 다각형을 표시합니다
      polygon.setMap(map);
      // 다각형에 마우스오버 이벤트가 발생했을 때 변경할 채우기 옵션입니다
      let mouseoverOption = {
        fillColor: "#A2FF99", // 채우기 색깔입니다
      };

      // 다각형에 마우스아웃 이벤트가 발생했을 때 변경할 채우기 옵션입니다
      let mouseoutOption = {
        fillColor: "#fff", // 채우기 색깔입니다
      };
      // 다각형에 마우스오버 이벤트를 등록합니다
      kakao.maps.event.addListener(
        polygon,
        "mouseover",
        function (mouseEvent: any) {
          // 다각형의 채우기 옵션을 변경합니다
          polygon.setOptions(mouseoverOption);
        },
      );

      kakao.maps.event.addListener(
        polygon,
        "mouseout",
        function (mouseEvent: any) {
          // 다각형의 채우기 옵션을 변경합니다
          polygon.setOptions(mouseoutOption);
        },
      );

      //폴리건 클릭 이벤트 오버레이 띄우기
      kakao.maps.event.addListener(
        polygon,
        "click",
        function (mouseEvent: any) {
          let content =
            '<div class="overLay_info">' +
            '   <div class="overLay_title">' +
            name +
            "</div>";

          infowindow.setContent(content);
          infowindow.setPosition(mouseEvent.latLng);
          infowindow.setMap(map);
        },
      );
    }
  }, []);
  return (
    <div
      style={{
        height: "579px",
        width: "100%",
        borderRadius: "14px",
        overflow: "hidden",
        position: "sticky",
        top: "100px",
        boxShadow: "4px 12px 30px 6px rgba(0,0,0,.09)",
      }}
    >
      <div id="map" style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
};
export default Maps;
