"use strict"

let numberOfFilms;
do {
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели?")
} while (!numberOfFilms && numberOfFilms < 0 && numberOfFilms !==0);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

console.log(personalMovieDB);

if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
    alert("Просмотрено довольно мало фильмов")
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
    alert("Вы классический зритель")
} else if (personalMovieDB.count >= 30){
    alert("Вы киноман")
} else {
    alert("Произошла ошибка")
}