//3. Remove duplicates from array

var removeDuplicates = function(nums){
    let k = 1;
    for(let i = 1; i < nums.length; i++)
    {
        if(nums[i] !== nums[i-1]){
            nums[k] = nums[i];
            k++;
        }
    }
    return k;    
};

let nums = [1,2,2,3];
let len = removeDuplicates(nums);
let result = nums.slice(0,len);
console.log(result);