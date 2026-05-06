//58. Product of Array Except Self (238)

var productExceptSelf = function(nums) {
    let n = nums.length;
    let prefix = 1;
    let ans = [];
    for(let i = 0; i < nums.length; i++)
    {
        ans.push(prefix);
        prefix*=nums[i];
    }
    let suffix = 1;
    for(i = n-1; i >= 0; i--)
    {
        ans[i]*=suffix;
        suffix*=nums[i];
    } 
    return ans;        
};

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));