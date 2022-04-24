import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import location, { locationSaga } from "./myLocation";
import parkLocation, { parkLocationSaga } from "./parkLocation";
import loading from './loading';
import isCheck from './isCheck';

const rootReducer = combineReducers({
    location,
    parkLocation,
    loading,
    isCheck
});

export function* rootSaga() {
    yield all([locationSaga(), parkLocationSaga()]); //all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
};

export default rootReducer;
