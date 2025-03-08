function lonelyinteger(a) {
    // Write your code here
   let lonelyInteger = 0;

   for(num of a){
    lonelyInteger ^= num
   }
   return lonelyInteger
}

console.log(lonelyinteger([1,2,3,4,5,4,1,2,3]));
