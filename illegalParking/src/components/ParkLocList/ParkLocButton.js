import React from 'react';

import ListSvg from '../../assets/images/ListSvg.js';

import './ParkLocButton.scss';

const ParkLocButton = ({handleParkLocListToggle}) =>{
    return(
        <div className="parkloc-button" onClick={handleParkLocListToggle}>
            <ListSvg></ListSvg>
        </div>
    )
}

export default ParkLocButton;