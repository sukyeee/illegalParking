import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setLocationSaga } from "../modules/myLocation";

const useLocation = () => {
    const current = useSelector((state) => state.location);
    const dispatch = useDispatch();
    const setCurrent = useCallback(
        (newLocation) => {
            dispatch(setLocationSaga(newLocation));
        },
        [dispatch]
    );
    return [current, setCurrent];
};

export default useLocation;
