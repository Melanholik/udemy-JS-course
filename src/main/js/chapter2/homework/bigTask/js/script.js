"use strict"
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let filmName = prompt("Один из последних просмотренных фильмов?","");
let filmMark = +prompt("На сколько его оцените?","");
personalMovieDB.movies[filmName] = filmMark;
filmName = prompt("Один из последних просмотренных фильмов?","");
filmMark = +prompt("На сколько его оцените?","");
personalMovieDB.movies[filmName] = filmMark;
console.log(personalMovieDB);