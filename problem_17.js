//17. Flatten array

var flatternArray = function(nums){
    let result = [];
    for(let i = 0; i < nums.length; i++)
    {
        if(Array.isArray(nums[i])){
           result = result.concat(flatternArray(nums[i]));
        }else{
            result.push(nums[i]);
        }
    }
    return result;    
};

console.log(flatternArray([1,[2,[3]]]));