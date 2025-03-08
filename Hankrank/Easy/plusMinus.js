function plusMinus(arr) {
   let n = arr.length;

   let positive = 0;
   let negative = 0;
   let zero = 0;

   for(let i = 0; i <= n; i++){
    if(arr[i] > 0){
        positive++
    }else if(arr[i] < 0){
        negative++
    }else if(arr[i] == 0){
        zero++
    }
   }

   let positiveCount = (positive / n).toFixed(6);
   let negativeCount = (negative / n).toFixed(6);
   let zeroCount = (zero / n).toFixed(6);

   console.log(positiveCount);
   console.log(negativeCount);
   console.log(zeroCount);
}

plusMinus([-4, 3, -9, 0, 4, 1])
plusMinus([1, 1, 0, -1, -1])