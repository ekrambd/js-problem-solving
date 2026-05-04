//24. Array union

var union = function(arr1,arr2){
    let set = new Set(arr1);
    for(let i = 0; i < arr2.length; i++)
    {
        let num = arr2[i];
        if(!set.has(num)){
            set.add(arr2[i]);
        }
    }
    return [...set];            
};

console.log(union([1,2],[2,3]));