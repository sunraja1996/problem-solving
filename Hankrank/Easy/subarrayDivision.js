function birthday(s, d, m) {
   let n = s.length;

   let count = 0;
   for(let i = 0; i <= n - m; i++){
    let sum = 0;

    for(let j = 0; j < m; j++){
        sum += s[i + j]
    }

    if(sum === d){
        count++
    }
   }
   
   return count

}

console.log(birthday([2, 2, 1, 3, 2], 4, 2)); // Output: 2
console.log(birthday([4], 4, 1));             // Output: 1
console.log(birthday([1, 1, 1, 1, 1], 2, 2)); // Output: 4
console.log(birthday([1, 2, 3, 4, 5], 9, 2)); // Output: 1
console.log(birthday([1, 2, 1, 3, 2], 3, 2)); // Output: 3