import React from "react";

import SearchList from "./SearchList";

import Icon from "../../assets/images/Icons";

import "./Search.scss";

// import firebase from 'firebase';
// import { auth } from '../../api/firebase';
// import { Link } from "react-router-dom";

const Search = (props) => {
    const {
        address,
        addressChange,
        setSearched,
        searchFocus,
        searchList,
        setSearchFocus,
        handleSearchList,
        handleSearchItem,
    } = props;
    const onClickSearch = () => {
        handleSearchList(address);
        setSearched(true);
        setSearchFocus(false);
    };
    const onKeyPressSearch = (e) => {
        if (e.key === "Enter") {
            onClickSearch();
        }
    };

    // const [currentUser, setState] = useState(false);
    // useEffect(() => {
    //     auth.onAuthStateChanged((user) => {
    //         setState(user);
    //     });
    //     return () => setState(false);
    // }, []);

    return (
        <div className="searchbar">
            <input
                className="search-text"
                type="address"
                placeholder="장소, 주소, 주차장 검색"
                value={address}
                onChange={addressChange}
                onKeyPress={onKeyPressSearch}
            />
            <button className="search-click" onClick={onClickSearch}>
                <Icon>{"search"}</Icon>
            </button>
            {/* 로그인 */}
            {/* <div className="login-div">
                {!currentUser
                    ? <Link to={`/signIn`}><img src={require('../../assets/images/login.svg')} className='login-click' alt="login" /></Link>
                    : <img
                        src={require('../../assets/images/logout.svg')}
                        className='login-click'
                        onClick={() => { alert("로그아웃 되셨습니다."); firebase.auth().signOut(); }}
                        alt="logout"
                    />
                }
            </div> */}
            {searchFocus && (
                <SearchList
                    address={address}
                    searchList={searchList}
                    handleSearchItem={handleSearchItem}
                    handleSearchToggle={setSearchFocus}
                    setSearchFocus={setSearchFocus}
                />
            )}
        </div>
    );
};

export default Search;
