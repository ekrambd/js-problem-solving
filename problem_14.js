//14. Word count

var wordCount = function(word){
    if(!word) return 0;

    let arr = word.trim().split(/\s+/);
    return arr.length;
};

console.log(wordCount("I love JS"));