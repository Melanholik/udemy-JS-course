function calculateVolumeAndArea(rib) {
    if (!isNaN(rib) && rib % 1 === 0 && rib > 0) {
        return "Объем куба: " + rib * rib * rib + ", площадь всей поверхности: " + rib * rib * 6;
    } else {
        return "При вычислении произошла ошибка";
    }
}

console.log(calculateVolumeAndArea(5));
console.log(calculateVolumeAndArea(15));
console.log(calculateVolumeAndArea(15.5));
console.log(calculateVolumeAndArea(-5));

function getCoupeNumber(number) {
    if (isNaN(number) || number % 1 > 0 || number < 0) {
        return "Ошибка. Проверьте правильность введенного номера места";
    } else if (number === 0 || number > 36) {
        return "Таких мест в вагоне не существует";
    } else {
        return Math.ceil(number / 4);
    }
}

// getCoupeNumber(33);
// getCoupeNumber(7);
// getCoupeNumber(300);
// getCoupeNumber(0);
// getCoupeNumber(7.7);
// getCoupeNumber(-10);
// getCoupeNumber('Hello');