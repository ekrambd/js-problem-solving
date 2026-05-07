//63. Find the difference min and mix

var findDiff = function(nums){
    let min = nums[0];
    let max = nums[0];
    for(let i = 1; i < nums.length; i++)
    {
        if(nums[i] > max){
            max = nums[i];
        }
        if(nums[i] < min){
            min = nums[i];
        }
    }
    let diff = max - min;
    return diff;   
};

console.log(findDiff([4,9,1,7]));