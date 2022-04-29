function Review(movie, rating, comment, id = null) {
    this.movie = new Movie(movie.title, movie.genre, movie.releaseYear, movie.runtime);
    this.rating = rating;
    this.comment = comment;
    this.id = id;
}

function renderReviewsTable(reviews, containerElement) {
    const tableManager = new TableManager();
    const table = tableManager.createTable(CommentsHeaders, reviews);
    containerElement.replaceChildren(table);
}

const reviewHeaders = ['id', 'movie', 'rating', 'comment'];