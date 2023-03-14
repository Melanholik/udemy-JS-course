function fib(number) {
    if (typeof number != "number" || number < 1 || !Number.isInteger(number)) {
        return "";
    }
    if (number === 1) {
        return "0";
    }
    if (number === 2) {
        return "0 1"
    } else {
        let a = 0;
        let b = 1;
        let str = "0 1";
        for (let i = 2; i < number; i++) {
            let c = a + b;
            str = str + " " + c;
            a = b;
            b = c;
        }
        return str;
    }
}

// console.log(fib(4));
// console.log(fib(7));
console.log(fib("7"));
// console.log(fib(1));
// console.log(fib(0));