function Movie(title, genre, releaseYear, runtime, id = null) {
    this.title = title;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.runtime = runtime;
    this.id = id;
    this.toString = function() {
        let output = `${title}\n${genre}\n${releaseYear}\n${runtime}`
        return output;
    }
}

function Review(movie, rating, comment, id = null) {
    this.movie = new Movie(movie.title, movie.genre, movie.releaseYear, movie.runtime);
    this.rating = rating;
    this.comment = comment;
    this.id = id;
}

const movieHeaders = ['id', 'title', 'genre', 'releaseYear', 'runtime'];
const reviewHeaders = ['id', 'movie', 'rating', 'comment'];

function renderUserTable(movies, containerElement) {
    const tableManager = new TableManager();
    const table = tableManager.createTable(movieHeaders, movies);
    const table2 = tableManager.createTable(reviewHeaders, movies);
    containerElement.replaceChildren(table);
    containerElement.replaceChildren(table2);
}

function renderReviewsTable(reviews, containerElement) {
    const tableManager = new TableManager();
    const table = tableManager.createTable(CommentsHeaders, reviews);
    containerElement.replaceChildren(table);
}