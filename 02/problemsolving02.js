function lonelyInteger(a){
    let n = 0;

    for(let num of a){
        n ^= num
    }
    return n
}
console.log(lonelyInteger([1,2,3,4,3,2,1]));



function removeDuplicates(a){
    let numbers = {};
    
    for(let i = 0; i < a.length; i++){
        if(!numbers[a[i]]){
            numbers[a[i]] = 1
        }else{
            numbers[a[i]]++
        }
    }
    let uniqueNumbers = [];

    for(let i =0; i < a.length; i++){
        if(numbers[a[i]] === 1){
            uniqueNumbers.push(a[i])
        }
    }
    return uniqueNumbers;
}
console.log(removeDuplicates([1, 2, 3, 4, 3, 2, 1]));
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

function findDuplicates(a){
    let numbers = {};
    let duplicates = [];

    for(let i = 0; i < a.length; i++){
        if(!numbers[a[i]]){
            numbers[a[i]] = 1
        }else{
            numbers[a[i]]++
        }
    }

    for(let key in numbers){
        if(numbers[key] > 1){
            duplicates.push(parseInt(key))
        }
    }
 
    return duplicates;
}
console.log(findDuplicates([1, 2, 3, 4, 3, 2, 1]));
console.log(findDuplicates([1, 2, 2, 3, 4, 4, 5]));

// Diagonal difference
function diagonalDifference(a){
    let leftDiagonal = 0;
    let rightDiagonal = 0;

    for(let i = 0; i < a.length; i++){
        leftDiagonal += a[i][i];
        rightDiagonal += a[i][a.length - 1 - i];
    }
    return Math.abs(leftDiagonal - rightDiagonal)
}
const a = [
   [11,2,4],
   [4,5,6],
   [10,8,-12]
];
console.log(diagonalDifference(a));


// countingSort of Array
function countingSort(arr) {
    // initiate with all the values with 0 in all array values
    let allArray = [];
    for(let i = 0; i < 100; i++){
        allArray[i] = 0;
    }
    for(let i = 0; i < arr.length; i++){
        allArray[arr[i]] += 1
    }
    console.log(allArray.length)
    return allArray;
} 

console.log(countingSort([63,25,73,1,98,73,56,84,86,57,16,83,8,25,81,56,9,53,98,67,99,12,83,89,80,91,39,86,76,85,74,39,25,90,59,10,94,32,44,3,89,30,27,79,46,96,27,32,18,21,92,69,81,40,40,34,68,78,24,87,42,69,23,41,78,22,6,90,99,89,50,30,20,1,43,3,70,95,33,46,44,9,69,48,33,60,65,16,82,67,61,32,21,79,75,75,13,87,70,33]));

function flippingMatrix(matrix) {
    // Write your code here
    let sum = 0;
    let n = matrix.length
    
    for(let i = 0; i < n /2; i++){
        for(let j = 0; j < n/2; j++){
            sum += Math.max((matrix[i][j]), Math.max(matrix[i][n-1-j]),Math.max(matrix[n-1-i][j], matrix[n-1-i][n-1-j]))
        }
    }
    return sum;
}
const b = [
    [11,2,4],
    [4,5,6],
    [10,8,-12]
 ];
 console.log(flippingMatrix(b));
