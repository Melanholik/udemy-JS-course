"use strict"

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {
        do {
            this.count = +prompt("Сколько фильмов вы посмотрели?")
        } while (!this.count && this.count < 1);
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let filmName;
            do {
                filmName = prompt("Один из последних просмотренных фильмов?", "");
            } while (!filmName || filmName.length === 0 || filmName.length > 49)

            let filmMark;
            do {
                filmMark = +prompt("На сколько его оцените?", "");
            } while (!filmMark || filmMark < 0)
            this.movies[filmName] = filmMark;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {
            let genres;
            do {
                genres = prompt(`Ваш любимый жанр под номером ${i}`, "");
            } while (!genres || genres.trim().length === 0 || genres.length > 49);
            this.genres.push(genres);
        }

        this.genres.forEach(function (element, i) {
            console.log(`Любимый жанр ${i + 1} - это ${element}`);
        });
    },
    detectPersonalLevel: function () {
        if (this.count < 10 && this.count > 0) {
            alert("Просмотрено довольно мало фильмов");
        } else if (this.count > 10 && this.count < 30) {
            alert("Вы классический зритель");
        } else if (this.count >= 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    showMyDB: function () {
        if (!this["privat"]) {
            console.log(personalMovieDB);
        }
    },

    toggleYourGenres: function () {
        this.privat = !this.privat;
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.toggleYourGenres();
personalMovieDB.showMyDB();
console.log(personalMovieDB);