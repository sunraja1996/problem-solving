function findMedian(arr){
    arr.sort((a,b) => a - b);
    let midIndex = Math.floor(arr.length / 2);
    return arr[midIndex]
}

console.log(findMedian([0, 1, 2, 4, 6, 5, 3])); // Output: 3
console.log(findMedian([7, 3, 1, 5, 9])); // Output: 5