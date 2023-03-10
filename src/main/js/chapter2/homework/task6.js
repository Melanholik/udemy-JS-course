// Место для первой задачи
function sayHello(name) {
    return "Привет, " + name + "!";
}

// Место для второй задачи
function returnNeighboringNumbers(number) {
    let a = [];
    let index = 0;
    for (let i = 1; i >= -1; i--) {
        a[index++] = number - i;
    }
    return a;
}

// Место для третьей задачи
function getMathResult(number, count) {
    if (count instanceof String || number instanceof Number || count < 1) {
        return number;
    }
    let str = number;
    let index = 2;
    for (let i = 0; i < count - 1; i++) {
        str += "---" + number * index++;
    }
    return str;
}

console.log(sayHello('Антон'));
console.log(returnNeighboringNumbers(5));
console.log(getMathResult(10, 5));