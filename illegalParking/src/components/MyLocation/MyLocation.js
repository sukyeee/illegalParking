import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import root from "window-or-global";

import { setLocationSaga } from "../../modules/myLocation";

import Icon from "../../assets/images/Icons";

import "./MyLocation.scss";

const MyLocation = () => {
    const dispatch = useDispatch();
    const setMyLocation = useCallback(() => {
        if (typeof root !== "undefined" && root.IntersectionObserver) {
            if (root.navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const newLocation = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    };
                    dispatch(setLocationSaga(newLocation));
                });
                console.log("Use navigator");
            }
        } else {
            console.log("Cant' navigator");
        }
    }, [dispatch]);
    return (
        <div className="my-location">
            <Icon onClick={setMyLocation}>{"my-location"}</Icon>
        </div>
    );
};

export default MyLocation;
