import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import cn from "classnames";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

import ParkLocList from "../../components/ParkLocList/ParkLocList";

import Icons from "../../assets/images/Icons";
import "swiper/swiper.scss";

import "./ParkLocListContainer.scss";

const category = [
    {
        id: 1,
        title: "ALL",
    },
    {
        id: 2,
        title: "CCTV",
    },
    {
        id: 3,
        title: "보호구역",
    },
    {
        id: 4,
        title: "주차장",
    },
];

const ParkLocListContainer = ({
    parkLocListToggle,
    handleParkLocListToggle,
}) => {
    SwiperCore.use([Pagination]);
    const parkLocation = useSelector((state) => state.parkLocation);
    useEffect(() => {
        const paginationBullet = document.querySelector(".parkloc-swiper");
        for (let i = 0; i < category.length - 1; i++) {
            paginationBullet.firstChild.children[i].innerHTML =
                category[i + 1].title;
        }
    }, []);
    return (
        <div
            className={cn("park-swiper-container", { onSwiper: parkLocListToggle })}
        >
            <div className="swiper-header">
                <h1 className="swiper-title">목록보기</h1>
                <div
                    className="swiper-down-button"
                    onClick={handleParkLocListToggle}
                >
                    <Icons>{"arrow-down"}</Icons>
                </div>
            </div>
            <Swiper
                className="parkloc-swiper"
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop
            >
                <SwiperSlide className="parkloc-swiper-list">
                    <ParkLocList
                        parkLocation={parkLocation.cctv}
                        type={"cctv"}
                    ></ParkLocList>
                </SwiperSlide>
                <SwiperSlide className="parkloc-swiper-list">
                    <ParkLocList
                        parkLocation={parkLocation.children}
                        type={"children"}
                    ></ParkLocList>
                </SwiperSlide>
                <SwiperSlide className="parkloc-swiper-list">
                    <ParkLocList
                        parkLocation={parkLocation.parkinglot}
                        type={"parkinglot"}
                    ></ParkLocList>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ParkLocListContainer;
