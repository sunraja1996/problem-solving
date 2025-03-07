function pageCount(n, p) {
    // Write your code here
    let fromFrontpage = Math.floor(p / 2);

    let fromLastpage = Math.floor((n / 2) - Math.floor(p / 2));

    return Math.min(fromFrontpage, fromLastpage);
}

console.log(pageCount(6, 2));  // Output: 1
console.log(pageCount(5, 4));  // Output: 0
console.log(pageCount(7, 3));  // Output: 1
console.log(pageCount(10, 4)); // Output: 2