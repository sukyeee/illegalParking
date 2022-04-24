import root from "window-or-global";
import CarIcon from "../../assets/images/car_icon.png";

import parkingMarker from "../../assets/images/parking-marker.svg";
import cctvMarker from "../../assets/images/cctv-marker.svg";
import childrenMarker from "../../assets/images/child-marker.svg";

const { kakao } = root;

export const drawMap = (
    location,
    setLocation,
    type,
    mapLevel,
    mapType,
    { cctv, children, parkinglot }
) => {
    const container = document.getElementById("kakaomap");
    const markerImage = new kakao.maps.MarkerImage(
        CarIcon,
        new kakao.maps.Size(35, 35), // 마커이미지의 크기입니다
        { offset: new kakao.maps.Point(24, 24) } // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
    ); // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다

    const options = {
        center: new kakao.maps.LatLng(location.latitude, location.longitude),
        level: mapLevel.current,
    };

    const map = new kakao.maps.Map(container, options); // 지도생성
    const geocoder = new kakao.maps.services.Geocoder();
    const searchDetailAddrFromCoords = (coords, callback) => {
        geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
    }

    const markerPosition = new kakao.maps.LatLng(
        location.latitude,
        location.longitude
    ); // 마커가 표시될 위치입니다
    const marker = new kakao.maps.Marker({
        position: markerPosition, // 지도 중심좌표에 마커를 생성합니다
        image: markerImage,
    });

    marker.setMap(map); // 마커생성

    kakao.maps.event.addListener(map, "click", (mouseEvent) => {
        const latlng = mouseEvent.latLng;
        marker.setPosition(latlng);
        const latitude = latlng.Ma;
        const longitude = latlng.La;
        searchDetailAddrFromCoords(mouseEvent.latLng, (result, status) => {
            if (status === kakao.maps.services.Status.OK) {
                const isBuilding = !!result[0].road_address;
                setLocation({ latitude, longitude, isBuilding} );
            }   
        });
    });

    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT);
    kakao.maps.event.addListener(map, "zoom_changed", () => {
        mapLevel.current = map.getLevel();
    });
    const mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.BOTTOMLEFT);
    kakao.maps.event.addListener(map, "maptypeid_changed", () => {
        mapType.current = map.getMapTypeId();
    });
    if (mapType.current === 1) {
        map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
    } else {
        map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
    }

    if (type === 1) {
        drawMarker(map, children, childrenMarker, 1);
        drawMarker(map, cctv, cctvMarker, 2);
        drawMarker(map, parkinglot, parkingMarker, 3);
    } else if (type === 2) {
        drawMarker(map, cctv, cctvMarker, 2);
    } else if (type === 3) {
        drawMarker(map, children, childrenMarker, 3);
    } else {
        drawMarker(map, parkinglot, parkingMarker, 4);
    }
};

const drawMarker = (map, locations, image) => {
    if(locations === undefined){
        return;
    }
    locations.forEach((location) => {
        const imageSize = new kakao.maps.Size(28, 38);
        const markerImage = new kakao.maps.MarkerImage(image, imageSize);
        const markerPosition = new kakao.maps.LatLng(
            location.LATITUDE,
            location.LONGITUDE
        );
        new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: markerPosition, // 마커를 표시할 위치
            image: markerImage, // 마커 이미지
        });
    });
};
