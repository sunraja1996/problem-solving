// Two Sums

function twoSum(nums, target) {
    let n = {};

    for(let i = 0; i < nums.length; i++){
       let number = target - nums[i]

       if(number in n){
            return [n[number], i]
       }
       n[nums[i]] = i
    }
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3, 2, 4], 6));     
console.log(twoSum([3, 3], 6)); 

// Sum of two numbers
function addTwoNumbers(l1, l2) {
    let sum = [];
    let carry = 0;
    let a = 0; b = 0;

   while(a < l1.length || b < l2.length || carry > 0){
    let digit1 = a < l1.length ? l1[a]:0;
    let digit2 = b < l2.length ? l2[b]:0;
    let total = digit1 + digit2 + carry;
    carry = Math.floor(total / 10);
    sum.push(total % 10);

    a++;
    b++;
   }

   return sum
};

console.log(addTwoNumbers([2,4,3], [5,6,4])) // [7,0,8] // 342 + 465 = 807.
console.log(addTwoNumbers([9, 9, 9], [1]));       // Output: [0, 0, 0, 1]
console.log(addTwoNumbers([0], [0]));   

// To Be Or Not To Be
var expect = function(val) {
    const tobeFn = function(anotherVal){
        if(val === anotherVal) return true;
        else throw new Error("Not Equal")
    }
    const nottobeFn = function(anotherVal){
        if(val !== anotherVal) return true;
        else throw new Error("Equal")
    }
    return {
        toBe : tobeFn,
        notToBe : nottobeFn
    };
};
try {
    console.log(expect(5).toBe(5))
    console.log(expect(5).toBe(null))
    console.log(expect(5).notToBe(null))
} catch (error) {
    console.log(error.message);
}

// Counter II
var createCounter = function(init) {
    let count = init;
    
    const increment = () => {
        return count++
    }
    const decrement = () => {
        return count--
    }
    const reset = () =>{
        return init
    }
    return {
        increment,
        decrement,
        reset
    }
};

