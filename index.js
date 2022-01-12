// Code your solution in this file!

function distanceFromHqInBlocks(pickup) {
    if (pickup > 42) {
        return pickup - 42;
    }
    else {
        return 42 - pickup;
    }
}

function distanceFromHqInFeet(pickup) {
    let blocks = distanceFromHqInBlocks(pickup);
    return blocks * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * 264;
    }
    else {
        return (destination - start) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination);
        if (feet <= 400 ) {
            return 0;
        }
        else if (feet <= 2000) {
            return (feet - 400) * .02;
        }
        else if (feet < 2500) {
            return 25;
        }
        else {
            return 'cannot travel that far';
        }
}