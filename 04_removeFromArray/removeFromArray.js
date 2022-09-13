const removeFromArray = function(arr, ...arg) {
    for(let i = 0; i < arg.length; i++){
        if(arr.includes(arg[i]))
            arr.splice(arr.indexOf(arg[i]),1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
