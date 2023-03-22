const someString = 'This is some strange string';

function reverse(str) {
    if (typeof str !== 'string') {
        return "Ошибка!";
    }
    let reversStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversStr += str[i];
    }
    return reversStr;
}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = "Доступные валюты:\n";
    let isFind = false;
    for (const currencies of arr) {
        if (currencies !== missingCurr) {
            str += currencies + "\n";
            isFind = true;
        }
    }
    return isFind ? str : "Нет доступных валют";
}

const a = {};
console.log(reverse(someString));
console.log(reverse(a));
console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));
console.log(...baseCurrencies, ...additionalCurrencies)