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
