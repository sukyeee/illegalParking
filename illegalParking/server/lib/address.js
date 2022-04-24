const axios = require("axios");

const URL = "http://www.juso.go.kr/addrlink/addrLinkApi.do";
const KEY = "devU01TX0FVVEgyMDIwMDkxMDE4MzIxNzExMDE3MDA=";

exports.getAddress = async function (search) {
    const response = await axios.get(URL, {
        params: {
            confmKey: KEY,
            currentPage: 1,
            countPerPage: 10,
            keyword: search,
            resultType: "json",
        },
    });
    return response.data.results.juso;
};
