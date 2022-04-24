import React, { useState } from "react";
import SearchContainer from "../../containers/SearchContainer/SearchContainer";
import LocationContainer from "../../containers/LocationContainer/LocationContainer";
import ParkLocListContainer from "../../containers/ParkLocListContainer/ParkLocListContainer";

import Category from "../../components/Category/Category";
import MyLocation from "../../components/MyLocation/MyLocation";
import ParkLocButton from "../../components/ParkLocList/ParkLocButton";

import useLocation from "../../hooks/useLocation";
import useToggle from "../../hooks/useToggle";

import "./MainPage.scss";
import CheckContainer from "../../containers/CheckContainer/CheckContainer";

const MainPage = () => {
    const [location, setLocation] = useLocation();
    const [parkLocListToggle, handleParkLocListToggle] = useToggle();
    const [type, setType] = useState(1);
    return (
        <div className="main-page">
            <SearchContainer></SearchContainer>
            <LocationContainer
                location={location}
                setLocation={setLocation}
                type={type}
            ></LocationContainer>
            <Category setType={setType}></Category>
            <MyLocation></MyLocation>
            <ParkLocButton
                handleParkLocListToggle={handleParkLocListToggle}
            ></ParkLocButton>
            <ParkLocListContainer
                parkLocListToggle={parkLocListToggle}
                handleParkLocListToggle={handleParkLocListToggle}
            ></ParkLocListContainer>
            <CheckContainer />
        </div>
    );
};

export default MainPage;
