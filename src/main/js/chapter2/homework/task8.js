function getTimeFromMinutes(minutes) {
    if (isNaN(minutes) || minutes < 0 || minutes % 1 > 0) {
        return "Ошибка, проверьте данные";
    }
    const hour = Math.floor(minutes / 60);
    const min = minutes % 60;
    if (hour > 1 && hour < 5) {
        return `Это ${hour} часа и ${min} минут`;
    }
    if (hour === 1) {
        return `Это ${hour} час и ${min} минут`;
    } else {
        return `Это ${hour} часов и ${min} минут`;
    }
}

console.log(getTimeFromMinutes(150));
// console.log(getTimeFromMinutes(50))
// console.log(getTimeFromMinutes(0))
// console.log(getTimeFromMinutes(-150))


function findMaxNumber(a, b, c, d) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || typeof d !== 'number') {
        return 0;
    }
    if (arguments.length < 4) {
        return 0;
    }
    return Math.max(a, b, c, d);
}