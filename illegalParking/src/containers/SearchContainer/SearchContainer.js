import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

import { roadToPositionSaga } from "../../modules/myLocation";
import useSearch from "../../hooks/useSearch";

import Search from "../../components/Search/Search";
import AddressList from "../../components/AddressList/AddressList";

import "./SearchContainer.scss";

const SearchContainer = () => {
    const [searched, setSearched] = useState(false);
    const [address, setAddress] = useState("");
    const [
        searchFocus,
        searchList,
        setSearchFocus,
        handleSearchList,
    ] = useSearch(address);
    const addressChange = useCallback(
        (e) => {
            setAddress(e.target.value);
            setSearchFocus(true);
            setSearched(false);
        },
        [setAddress, setSearchFocus]
    );
    const dispatch = useDispatch();
    const roadToPosition = useCallback(
        (road) => {
            dispatch(roadToPositionSaga(road));
        },
        [dispatch]
    );
    const handleSearchItem = useCallback(
        (e) => {
            const road = e.currentTarget.lastChild.lastChild.innerHTML;
            setAddress(road);
            roadToPosition(road);
        },
        [roadToPosition, setAddress]
    );

    return (
        <div className="search-container">
            <Search
                address={address}
                addressChange={addressChange}
                setSearched={setSearched}
                searchFocus={searchFocus}
                searchList={searchList}
                setSearchFocus={setSearchFocus}
                handleSearchList={handleSearchList}
                handleSearchItem={handleSearchItem}
            ></Search>
            {searched && (
                <AddressList
                    searchList={searchList}
                    setSearched={setSearched}
                    setSearchFocus={setSearchFocus}
                    handleSearchItem={handleSearchItem}
                ></AddressList>
            )}
        </div>
    );
};

export default SearchContainer;
