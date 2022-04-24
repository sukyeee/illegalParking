import React from 'react';
import Check from '../../assets/images/Check';

import './CheckContainer.scss';
import { useDispatch } from 'react-redux';
import { startCheck } from '../../modules/isCheck';

const CheckContainer = () => {
    const reduxDispatch = useDispatch();

    const onClickCheck = () => {
        reduxDispatch(startCheck());
    }

    return (
        <>
            <div className="check-button" onClick={onClickCheck}>
                <Check />
            </div>
        </>
    );
};

export default CheckContainer;