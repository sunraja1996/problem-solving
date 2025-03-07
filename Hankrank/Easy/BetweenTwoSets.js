function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(x, y) {
    return (x / gcd(x, y)) * y;
}

function computeLCM(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result = lcm(result, arr[i]);
    }
    return result;
}

function computeGCD(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result = gcd(result, arr[i]);
    }
    return result;
}

function getTotalX(a, b) {
    let lcmA = computeLCM(a);
    let gcdB = computeGCD(b);

    console.log(`LCM(A): ${lcmA}, GCD(B): ${gcdB}`);

    if (lcmA > gcdB) return 0;

    let count = 0;
    for (let i = lcmA; i <= gcdB; i += lcmA) {
        if (gcdB % i === 0) {
            count++;
        }
    }

    console.log(`Valid numbers count: ${count}`);
    return count;
}

// Test cases
console.log(getTotalX([2, 4], [16, 32, 96])); 
console.log(getTotalX([16, 32, 96], [64, 128, 256])); 
console.log(getTotalX([2, 6], [24,36])); 
