//22. Longest word

var longestWord = function(value){
    let arr = value.split(" ");
    let maxLengthStr = arr[0];
    for(let i = 1; i < arr.length; i++)
    {
        if(arr[i].length > maxLengthStr.length){
            maxLengthStr = arr[i];
        }
    }
    return maxLengthStr;     
};

console.log(longestWord("I love programming"));