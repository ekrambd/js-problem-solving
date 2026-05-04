//11. Anagram check

var anagramCheck = function(s,t){
    if(s.length != t.length) return false;
    let map = new Map();
    for(let i = 0; i < s.length; i++)
    {
        let count = map.get(s[i]) || 0;
        map.set(s[i],count+1);
    }
    for(let i = 0; i < t.length; i++)
    {
        let count = map.get(t[i]) || 0;
        if(count == 0) return false;
        map.set(t[i],count-1);
    } 
    return true;               
};

console.log(anagramCheck("listen","silent"));
console.log(anagramCheck("car","rat"));