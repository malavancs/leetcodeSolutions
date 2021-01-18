/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a,b)=> {
        return a-b;
    });
    let count = 0;
    let leftIndex = 0;
    let rightIndex = nums.length-1;
    while(leftIndex<rightIndex){
        const sum = nums[leftIndex]+nums[rightIndex];
        if(k == sum){
            leftIndex++;
            rightIndex--;
            count++;
        } else if (k < sum){
            rightIndex--;
        } else{
            leftIndex++;
        }
    }
    return count;
    
};

nums = [1,2,3,4], k = 5;
console.assert(maxOperations(nums,k) === 2);
nums = [3,1,3,4,3], k = 6
console.assert(maxOperations(nums,k)===1);
