const headQuarterBlockStreet = 42;
function distanceFromHqInBlocks(location) {
    return Math.abs(headQuarterBlockStreet - location)
}

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264
}
function distanceTravelledInFeet(startLocation, destinationLocation) {
    return (Math.abs(destinationLocation - startLocation))*264
}
function calculatesFarePrice(startLocation, destinationLocation) {
    let travelled = distanceTravelledInFeet(startLocation, destinationLocation)
    if (travelled <= 400) {
        return 0
    }
    else if (travelled > 400 && travelled <= 2000) {
        return (travelled - 400) * 0.02
    }
    else if (travelled > 2000 && travelled <= 2500) {
        return 25
    }
    else{
        return "cannot travel that far"
    }
}   