import { get } from 'axios';

const URL = "http://www.juso.go.kr/addrlink/addrLinkApi.do";
const KEY = "devU01TX0FVVEgyMDIwMTIxNjIxMzI1MDExMDU2MTU=";

export const getAddress = async (search) =>{
    const response = await get(URL, {
        params: {
            confmKey: KEY,
            currentPage: 1,
            countPerPage: 10,
            keyword: search,
            resultType: 'json'
        },
    })
    return response.data.results.juso;
}
