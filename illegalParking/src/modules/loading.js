import { createAction, handleActions } from "redux-actions";

const START_LOADING = "loading/START_LOADING";
const FINISH_LOADING = "loading/FINISH_LOADING";

export const startLoading = createAction(START_LOADING);

export const finishLoading = createAction(FINISH_LOADING);

const initialState = {
    isLoading: false,
};

const loading = handleActions(
    {
        [START_LOADING]: (state, action) => ({
            isLoading: true,
        }),
        [FINISH_LOADING]: (state, action) => ({
            isLoading: false,
        }),
    },
    initialState
);

export default loading;
