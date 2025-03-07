function sockMerchant(n, ar) {
    // Write your code here
    let sockCount = {};
    let match = 0;

    for(let sock of ar){
        sockCount[sock] = (sockCount[sock] || 0) + 1;
    }
    for(let color in sockCount){
        match += Math.floor(sockCount[color] / 2)
    }

    return match 
}

console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]));  // Output: 2
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])); // Output: 3