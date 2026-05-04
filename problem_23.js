//23. Array intersection

var intersaction = function(arr1,arr2){
    let set = new Set(arr1);
    let result = [];
    for(let i = 0; i < arr2.length; i++)
    {
        let num = arr2[i];
        if(set.has(num)){
            result.push(num);
            set.delete(num);
        }
    }
    return result;
};

console.log(intersaction([1,2,3],[2,3,4]))