const palindromes = function (text) {
    text = text.toLowerCase();
    text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    text = text.replaceAll(" ","");
    console.log("AAAAAAAAAAAAAA ", text);
    for(let pos = 0; pos < text.length; pos++){
        if (text[pos] !== text[text.length-pos-1] ) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
