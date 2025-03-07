function bonAppetit(bill, k, b) {
    // Write your code here
    let totalCost = bill.reduce((sum,cost,i) => i !== k ? sum + cost : sum, 0)

    let annaShare = totalCost / 2;

    if(b === annaShare){
        return "Bon Appetit"
    }else{
        return b - annaShare
    }
}

console.log(bonAppetit([3, 10, 2, 9], 1, 7))
console.log(bonAppetit([3, 10, 2, 9], 1, 12))