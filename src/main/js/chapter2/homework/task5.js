const lines = 5;
let result = '';
let countStars = 1;
let countSpace = lines;
for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < countSpace; j++) {
        result += " ";
    }
    for (let j = 0; j < countStars; j++) {
        result += "*";
    }
    countSpace--;
    countStars += 2;
    result += "\n";
}
console.log(result);