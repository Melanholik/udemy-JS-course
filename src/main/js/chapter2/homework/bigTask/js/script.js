"use strict"
let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const filmName = prompt("Один из последних просмотренных фильмов?");
const filmMark = prompt("На сколько его оцените?");

const movies = {
};
movies[`${filmName}`] = filmMark;

