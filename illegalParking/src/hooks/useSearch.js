import { useState, useEffect, useCallback } from "react";
import { getAddress } from "../api/address";

const getSearchList = async (text) => {
    const response = await getAddress(text);
    return response;
};

const useSearch = (text) => {
    const [searchFocus, setSearchFocus] = useState(false);
    const [searchList, setSearchList] = useState([]);
    const handleSearchList = useCallback(
        async (text) => {
            const newSearchList = await getSearchList(text);
            setSearchList(newSearchList);
        },
        [setSearchList]
    );
    useEffect(() => {
        handleSearchList(text);
    }, [text, handleSearchList]);
    return [searchFocus, searchList, setSearchFocus, handleSearchList];
};

export default useSearch;
