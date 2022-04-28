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

const movieHeaders = ['id', 'title', 'genre', 'releaseYear', 'runtime'];

function renderMovieTable(movies, containerElement) {
    const tableManager = new TableManager();
    const table = tableManager.createTable(movieHeaders, movies);
    containerElement.replaceChildren(table);
}