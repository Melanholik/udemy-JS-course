function factorial(a) {
    if (typeof (a) !== "number" || !Number.isInteger(a)) {
        return "Ошибка, проверьте данные";
    }
    if (a < 2) {
        return 1;
    }
    return a * factorial(a - 1);
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));