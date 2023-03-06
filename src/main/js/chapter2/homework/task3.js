firstTask();
secondTask();
thirdTask();
fourthTask();
console.log(fifthTask());

function firstTask() {
    let number = 5;
    while (number < 11) {
        console.log(number++);
    }
}

function secondTask() {
    for (let i = 20; i > 9; i--) {
        if (i === 13) {
            break;
        }
        console.log(i);
    }
}

function thirdTask() {
    for (let i = 1; i <= 10; i++) {
        if (i % 2) {
            continue;
        }
        console.log(i);
    }
}

function fourthTask() {
    let i = 2;
    while (i <= 16) {
        if (i % 2 === 0) {
            i++
            continue;
        }
        console.log(i++);
    }
}

function fifthTask() {
    const arrayOfNumbers = [];
    let y = 5;
    for (let i = 0; i <= 5; i++) {
        arrayOfNumbers[i] = y++;
    }
    return arrayOfNumbers;
}