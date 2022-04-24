import { get } from "axios";

const range = 2000;

export const getCCTV = async ({ latitude, longitude }) => {
    const response = await get("routes/busan-cctv", {
        params: {
            latitude: latitude,
            longitude: longitude,
            range: range,
        },
    });
    return response.data;
};

export const getParkingLot = async ({ latitude, longitude }) => {
    const response = await get("routes/busan-parkinglot", {
        params: {
            latitude: latitude,
            longitude: longitude,
            range: range,
        },
    });
    return response.data;
};

export const getChildren = async ({ latitude, longitude }) => {
    const response = await get("routes/busan-children", {
        params: {
            latitude: latitude,
            longitude: longitude,
            range: range,
        },
    });
    return response.data;
};
