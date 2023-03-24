/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// const block = document.querySelector(".promo__adv");
// block.remove();

const adv = document.querySelectorAll(".promo__adv img"),
    poster = document.querySelector(".promo__bg"),
    text = poster.querySelector(".promo__genre"),
    ulList = document.querySelector(".promo__interactive-list"),
    loList = document.createElement("ol");

adv.forEach(item => {
    item.remove();
})


text.textContent = "драма";

poster.style.backgroundImage = "url('img/bg.jpg')";
// const li = document.querySelectorAll(".promo__interactive-item");
// li.forEach((item, i) =>{
//     item.textContent = movieDB.movies[i];
// })
movieDB.movies.sort();
ulList.innerHTML = "";
movieDB.movies.forEach((item, i) => {
    ulList.innerHTML += `<li class="promo__interactive-item">${i + 1}) ${item} 
                            <div class="delete"></div>
                        </li>`
})
// ulList.replaceWith(loList)
// loList.classList.add(".promo__interactive-list");
// for (let i = 0; i < movieDB.movies.length; i++) {
//     let li = document.createElement('li');
//     li.classList.add('.promo__interactive-item');
//     li.textContent = movieDB.movies[i];
//     loList.append(li);
// }