const sumAll = function(val, end) {
    if(val < 0 || end < 0 || typeof val != "number"  || typeof end != "number") return "ERROR";
    if(val > end){
        let tmp = val;
        val = end;
        end = tmp;
    }
    for(let i = val+1; i <= end; i++){
        val += i;
    }
    return val;
};

// Do not edit below this line
module.exports = sumAll;
