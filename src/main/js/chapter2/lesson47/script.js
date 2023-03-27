function pow(a, b) {
    if (b === 0) {
        return 1;
    }
    if (b === 1) {
        return a;
    }
    return a * pow(a, b - 1);
}

console.log(pow(2, 0));
console.log(pow(2, 1));
console.log(pow(2, 2));
console.log(pow(2, 3));
console.log(pow(2, 4));