import { createAction, handleActions } from "redux-actions";

const START_CHECK = "loading/START_CHECK";
const FINISH_CHECK = "loading/FINISH_CHECK";

export const startCheck = createAction(START_CHECK);

export const finishCheck = createAction(FINISH_CHECK);

const initialState = {
    check: false,
};

const loading = handleActions(
    {
        [START_CHECK]: (state, action) => ({
            check: true,
        }),
        [FINISH_CHECK]: (state, action) => ({
            check: false,
        }),
    },
    initialState
);

export default loading;
