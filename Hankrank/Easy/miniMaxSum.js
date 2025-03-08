function miniMaxSum(arr) {
    // Write your code here
   arr.sort((a,b) => a - b);
   let minSum = arr.slice(0,4).reduce((sum,num) => sum + num,0)
   let maxSum = arr.slice(1,5).reduce((sum,num) => sum + num,0)

   console.log(minSum, maxSum);
   
}

miniMaxSum([1, 2, 3, 4, 5])