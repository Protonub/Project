const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

// const a =  prompt('Один из последних просмотренных фильмов?', '');
//       b =  prompt('На сколько оцените его?', '');
//       c =  prompt('Один из последних просмотренных фильмов?', '');
//       d =  prompt('На сколько оцените его?', '');


// personalMovieDB.movies.film1 = a;
// personalMovieDB.movies.grabe1 = b;
// personalMovieDB.movies.film2 = c;
// personalMovieDB.movies.grabe2 = d;

// console.log(personalMovieDB);

const a =  prompt('Один из последних просмотренных фильмов?', ''),
      b =  prompt('На сколько оцените его?', ''),
      c =  prompt('Один из последних просмотренных фильмов?', ''),
      d =  prompt('На сколько оцените его?', '');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

console.log(personalMovieDB);