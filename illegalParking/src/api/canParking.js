import { get } from "axios";

export const getPossible = async ({ latitude, longitude }) => {
    const response = await get("routes/can_parking", {
        params: {
            latitude: latitude,
            longitude: longitude,
        },
    });
    return response.data;
};