function rightPatter(n, s){
    for(let i = 1; i <= n; i++){
        let row = ""
        for(let j = 1; j <= i; j++){
            row += s
        }
        console.log(row)
    }
}
rightPatter(5, "*")

function leftPattern(n, s){
    for(let i = 1; i <= n; i++){
        let row = ""
        for(let j = 1; j <= n - i; j++){
            row += " "
        }
        for(let j = 1; j <= i; j++){
            row += s
        }
        console.log(row)
    }
}
leftPattern(5, "*")

function pramid(n, s){
    for(let i = 1; i <= n; i++){
        let row = "";
        for(let j = 1; j <= n -i; j++){
            row += " "
        }
        for(let j = 1; j <= i; j++){
            row += s + " "
        }
        console.log(row)
    }
}
pramid(5, "*")

function reversePramid(n, s){
    for(let i = n; i >= 1; i--){
        let row = "";
        for(let j = 1; j <= n - i; j++){
            row += " "
        }
        for(let j = 1; j <=  i ; j++){
            row += s + " "
        }
        console.log(row)
    }
}
reversePramid(5, "*")

function diamond(n , s){
    for(let i = 1; i <= n; i++){
        let row = "";
        for(let j = 1; j <= n -i; j++){
            row += " "
        }
        for(let j = 1; j <= i; j++){
            row += s + " "
        }
        console.log(row)
    }
    for(let i = n; i >= 1; i--){
        let row = "";
        for(let j = 1; j <= n - i; j++){
            row += " "
        }
        for(let j = 1; j <=  i ; j++){
            row += s + " "
        }
        console.log(row)
    }
}
diamond(5, "*")