const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', "Vitaliy"];

function sortStudentsByGroups(arr) {
    arr.sort();
    const newArr = [];
    let index = 0;
    for (let i = 0; i < 3; i++) {
        const teamArr = [];
        const end = index + 3;
        for (let j = index; j < end; j++) {
            teamArr.push(arr[index]);
            index++;
        }
        newArr.push(teamArr);
    }
    let str = "Оставшиеся студенты:";
    if (index === arr.length) {
        str += " -";
        newArr.push(str);
        return newArr;
    }
    for (index; index < arr.length; index++) {
        str += " " + arr[index];
        if (arr.length - index > 1) {
            str += ","
        }
    }
    newArr.push(str);
    return newArr;
}

console.log(sortStudentsByGroups(students));