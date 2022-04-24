import React, { useRef } from "react";

import Icons from "../../assets/images/Icons";

import "./SearchList.scss";

const SearchItem = ({ title, address, onClick }) => {
    return (
        <div className="search-item" onClick={onClick}>
            <Icons>{"marker"}</Icons>
            <div className="address">
                <div className="title">{title}</div>
                <div className="description">{address}</div>
            </div>
        </div>
    );
};

const SearchList = ({
    address,
    searchList,
    handleSearchItem,
    setSearchFocus,
}) => {
    const listKey = useRef(0);
    if (address === "" || searchList === null || searchList.length === 0) {
        return null;
    }
    return (
        <div className="search-list-container">
            <ul
                className="search-list"
                onClick={() => {
                    setTimeout(() => setSearchFocus(false), 100);
                }}
            >
                {searchList.map(({ bdNm, roadAddr }) => {
                    listKey.current += 1;
                    return (
                        <li key={listKey.current}>
                            <SearchItem
                                title={bdNm}
                                address={roadAddr}
                                onClick={handleSearchItem}
                            ></SearchItem>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SearchList;
