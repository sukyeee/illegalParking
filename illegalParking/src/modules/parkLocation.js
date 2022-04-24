import { createAction, handleActions } from "redux-actions";
import { call, put, takeLatest } from "redux-saga/effects";
import { console } from "window-or-global";

import { getCCTV, getChildren, getParkingLot } from "../api/parkLocation";

const SET_CCTV = "parkLocation/SET_CCTV";
const SET_CCTV_SAGA = "parkLocation/SET_CCTV_SAGA";

const SET_CHILDREN = "parkLocation/SET_CHILDREN";
const SET_CHILDREN_SAGA = "parkLocation/SET_CHILDREN_SAGA";

const SET_PARKING_LOT = "parkLocation/SET_PARKING_LOT";
const SET_PARKING_LOT_SAGA = "parkLocation/SET_PARKING_LOT_SAGA";

const setCCTV = createAction(SET_CCTV, (newLocation) => newLocation);

export const setCCTVSaga = createAction(
    SET_CCTV_SAGA,
    (newLocation) => newLocation
);

const setChildren = createAction(SET_CHILDREN, (newLocation) => newLocation);

export const setChildrenSaga = createAction(
    SET_CHILDREN_SAGA,
    (newLocation) => newLocation
);

const setParkingLot = createAction(
    SET_PARKING_LOT,
    (newLocation) => newLocation
);

export const setParkingLotSaga = createAction(
    SET_PARKING_LOT_SAGA,
    (newLocation) => newLocation
);

function* getCCTVSaga(action) {
    try {
        const response = yield call(getCCTV, action.payload);
        yield put(setCCTV(response));
    } catch (e) {
        console.error(e);
    }
}

function* getChildrenSaga(action) {
    try {
        const response = yield call(getChildren, action.payload);
        yield put(setChildren(response));
    } catch (e) {
        console.error(e);
    }
}

function* getParkingLotSaga(action) {
    try {
        const response = yield call(getParkingLot, action.payload);
        yield put(setParkingLot(response));
    } catch (e) {
        console.error(e);
    }
}

export function* parkLocationSaga() {
    yield takeLatest(SET_CCTV_SAGA, getCCTVSaga);
    yield takeLatest(SET_CHILDREN_SAGA, getChildrenSaga);
    yield takeLatest(SET_PARKING_LOT_SAGA, getParkingLotSaga);
}

const initialState = {
    cctv: [],
    children: [],
    parkinglot: [],
};

const parkLocation = handleActions(
    {
        [SET_CCTV]: (state, { payload: cctv }) => ({
            ...state,
            cctv: cctv,
        }),
        [SET_CHILDREN]: (state, { payload: children }) => ({
            ...state,
            children: children,
        }),
        [SET_PARKING_LOT]: (state, { payload: parkinglot }) => ({
            ...state,
            parkinglot: parkinglot,
        }),
    },
    initialState
);

export default parkLocation;
