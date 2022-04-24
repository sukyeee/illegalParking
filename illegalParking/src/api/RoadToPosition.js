import axios from 'axios';

const URL = "https://maps.googleapis.com/maps/api/geocode/json";
const KEY = "AIzaSyCtfBw2gCI5-8peksRDsw7IFDQ0SZD7q-c";

export const roadToPosition = async (road) =>{
    const response = await axios.get(URL, {
        params: {
            address: road,
            key: KEY
        },
    })
    return response.data.results[0].geometry.location;
}
