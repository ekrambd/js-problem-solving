//5. Max & Min in array

var minMax = function(nums){
    let min = nums[0];
    let max = nums[0];

    for(let i = 1; i < nums.length; i++){
        if(nums[i] < min){
            min = nums[i];
        }
        if(nums[i] > max){
            max = nums[i];
        }
    }

    return `max=${max}, min=${min}`;
};

console.log(minMax([5,2,9,1])); // max=9, min=1