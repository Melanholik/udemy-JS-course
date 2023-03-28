'use strict';

const box = document.getElementById("box"),
    btns = document.getElementsByTagName("button"),
    circles = document.getElementsByClassName("circle"),
    hearts = document.querySelectorAll(".heart"),
    oneHeart = document.querySelector(".heart"),
    wrapper = document.querySelector(".wrapper");

// box.style.backgroundColor = "blue";
btns[1].style.borderRadius = "20px";

box.style.cssText = "background-color: pink; width: 100%"
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = "green";
// }

hearts.forEach(item => {
    item.style.backgroundColor = "green";
})

const div = document.createElement('div');
div.classList.add("black")
//document.body.append(div);
//wrapper.append(div)
wrapper.prepend(div);
hearts[0].replaceWith(circles[0]);
div.style.width = "100%";
div.style.height = "auto"
div.innerHTML = "<h1>Hello World</h1>";
// div.textContent = "<h2>Текст</h2>";
div.insertAdjacentHTML("afterbegin", "<h1>Текст</h1>")