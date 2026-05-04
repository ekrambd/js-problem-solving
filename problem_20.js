//20. Rotate array

var rotateArray = function(nums,k){
    k = k % nums.length;
    let diff = nums.length - k;
    let arr1 = nums.slice(diff);
    let arr2 = nums.slice(0,diff);
    let arr = arr1.concat(arr2);
    for(let i = 0; i < arr.length; i++)
    {
        nums[i] = arr[i];
    }
    return nums;    
};

console.log(rotateArray([1,2,3],1));