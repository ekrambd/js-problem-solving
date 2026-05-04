//21. Character frequency

var frequency = function(value){
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
    let obj = {};
    map.forEach((value,key)=>{
        obj[key] = value;
    });
    return obj;   
};

console.log(frequency("aab"));