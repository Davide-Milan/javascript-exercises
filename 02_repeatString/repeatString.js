const repeatString = function(txt, reps) {
    if(reps < 0) return "ERROR";
    let result = '';
    for(let i = 0; i < reps; i++){
        result += txt;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
