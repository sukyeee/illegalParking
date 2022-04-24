const distanceFormat = (distance) =>{
    let result = ''
    if(distance >= 1000){
        result += `${parseInt((distance / 1000))}km `;
        distance %= 1000;
    }
    result += `${(distance % 1000)}m`;
    return result;
}

module.exports = distanceFormat;