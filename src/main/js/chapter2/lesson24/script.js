"use strict"

let numberOfFilms;

function start() {
    do {
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели?")
    } while (!numberOfFilms && numberOfFilms < 1);
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let filmName;
        do {
            filmName = prompt("Один из последних просмотренных фильмов?", "");
        } while (!filmName || filmName.length === 0 || filmName.length > 49)

        let filmMark;
        do {
            filmMark = +prompt("На сколько его оцените?", "");
        } while (!filmMark || filmMark < 0)
        personalMovieDB.movies[filmName] = filmMark;
    }
}

rememberMyFilms();

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        let genres;
        do {
            genres = prompt(`Ваш любимый жанр под номером ${i}`, "");
        } while (!genres || genres.length === 0 || genres.length > 49);
        personalMovieDB.genres.push(genres);
    }
}

writeYourGenres();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

detectPersonalLevel();


function showMyDB() {
    if (!personalMovieDB["privat"]) {
        console.log(personalMovieDB);
    }
}

showMyDB();
console.log(personalMovieDB);