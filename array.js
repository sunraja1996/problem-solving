function sumArray(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}
console.log(sumArray([1,2,3,4,5,6]))

// Find the Maximum Element
function maximumElement(arr){
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}
console.log(maximumElement([1,2,3,4,5,6]))

// Reverse an Array
function reverseArray(arr){
    let reverse = [];
    for(let i = arr.length - 1; i >= 0; i--){
        reverse.push(arr[i])
    }
    return reverse;
}
console.log(reverseArray([1,2,3,4,5,6]))

// Check if an Array Contains a Specific Value
function checkValue(arr, value){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == value){
            return true
        }
    }
    return false
}
console.log(checkValue([1,2,3,4,5,6], 6))
console.log(checkValue([1,2,3,4,5,6], 7))
console.log(checkValue([1,2,3,4,5,6], 5))

// Remove Duplicates
function removeDuplicates(arr){
    let uniqueArray = [];
    for(let i = 0; i < arr.length; i++){
        let isDuplicate = false;
        for(let j = 0; j < uniqueArray.length; j++){
            if(arr[i] === uniqueArray[j]){
                isDuplicate = true;
                break;
            }
        }
        if(!isDuplicate){
            uniqueArray.push(arr[i])
        }
    }
    return uniqueArray
}
console.log(removeDuplicates([1,2,3,4,5,6, 5,4,8]))

// Find the Second Largest Element
function secondLargest(arr){
    let max = 0;
    let secondMax = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            secondMax = max;
            max = arr[i]
        }else if(arr[i] > secondMax && arr[i] !== max){
            secondMax = arr[i]
        }
    }
    return secondMax
}
console.log(secondLargest([1,2,3,4,5,6,7,8]));
console.log(secondLargest([1,2]));