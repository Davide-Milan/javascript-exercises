const leapYears = year => {
    if(year % 100 == 0){
        if(year % 400 == 0) return true
        else return false;
    }
    return (year % 4 == 0) ? true : false;
};

// Do not edit below this line
module.exports = leapYears;
