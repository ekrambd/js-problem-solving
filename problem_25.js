//25. First non-repeating cha

var firstCharacter = function(value){
    let map = new Map();
    for(let i = 0; i < value.length; i++)
    {
        let count = map.get(value[i]);
        if(count == null){
            map.set(value[i],1);
        }else{
            map.set(value[i],count+1);
        }
    }

    for(let i = 0; i < value.length; i++)
    {
        let count = map.get(value[i]);
        if(count == 1) return value[i];
    }
    return -1;    
};

console.log(firstCharacter("aabbc"));
