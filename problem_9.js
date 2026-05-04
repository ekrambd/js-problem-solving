//9. Count vowels

var countVowels = function(value){
    value = value.toLowerCase();
    let vowels = ['a','e','i','o','u'];
    let count = 0;
    for(let i = 0; i < value.length; i++)
    {
        if(vowels.includes(value[i])){
            count+=1;
        }
    }
    return count;    
};

console.log(countVowels("hello"));