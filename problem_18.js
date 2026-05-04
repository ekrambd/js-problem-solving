//18. Unique count

var uniqueCount = function(nums){
    let k = 1;
    for(let i = 1; i < nums.length; i++)
    {
        if(nums[i] != nums[i-1]){
            nums[k] = nums[i];
            k++;
        }
    }
    return k;    
};

let nums = [1,1,2];
let len = uniqueCount(nums);
let result = nums.slice(0,len);
console.log(result.length);