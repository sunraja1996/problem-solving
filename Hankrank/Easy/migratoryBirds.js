function migratoryBirds(arr) {
    let n = new Array(6).fill(0);
    for(let i =0; i < arr.length; i++){
        n[arr[i]]++
    }

    let max = 0;
    let minBird = 6; 

    for(let i = 0; i <= 5; i++){
        if(n[i] > max){
            max = n[i];
            minBird = i
        }else if(n[i] === max && i < minBird){
            minBird = i
        }
    }
    return minBird
    
}

console.log(migratoryBirds([1, 4, 4 ,4, 5, 3]));
console.log(migratoryBirds([1, 1, 2, 2, 3]));   
console.log(migratoryBirds([5, 5, 4, 4, 3, 3])); 