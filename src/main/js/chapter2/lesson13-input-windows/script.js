"use strict"
// const answer = alert("Hello");
// const answer = confirm("Hello");
// const answer = prompt("How old are you?");
// console.log(answer)

const answers = [];
answers.push(prompt("What is your name?"));
answers.push(prompt("What is your surname?"));
answers.push(+prompt("How old are you?"));
console.log(answers)
console.log(typeof (answers[0]))
console.log(typeof (answers[1]))
console.log(typeof (answers[2]))
document.write(answers);