(function() {
    const requestManager = new RequestManager('https://jsonplaceholder.typicode.com/users');
    const tableManager = new TableManager();

    const dataTable = document.querySelector('#data-table');
    const dataForm = document.querySelector('#data-form');
    const requestSelector = dataForm.querySelector('#action');
    const generalInfo = dataForm.querySelector('#general-info');
    const id = dataForm.querySelector('#id');

    let movies = [];

    function hideFormInputs() {
        if (!generalInfo.classList.contains('hide')) generalInfo.classList.toggle('hide');
        if (!addressInfo.classList.contains('hide')) addressInfo.classList.toggle('hide');
        if (!companyInfo.classList.contains('hide')) companyInfo.classList.toggle('hide');
      }
  
      function displayFormInputs() {
        if (generalInfo.classList.contains('hide')) generalInfo.classList.toggle('hide');
        if (addressInfo.classList.contains('hide')) addressInfo.classList.toggle('hide');
        if (companyInfo.classList.contains('hide')) companyInfo.classList.toggle('hide');
      }
  
      function hideIdField(hide) {
        if (hide) id.classList.add('hide');
        else id.classList.remove('hide');
      }

      function renderMovieTable(movies) {
        const table = tableManager.createTable(movieHeaders, movies);
        dataTable.replaceChildren(table);
      }
  
      function addMovieToTable(movie) {
        console.log(movie);
        const tableBody = dataTable.querySelector('tbody');
        tableBody.appendChild(tableManager.createTableRow(tableManager.getValuesInOrder(movieHeaders, movie)));
      }
  
      function createmovieFromFormObj(dataObject) {
        const movie = new Movie(dataObject.title, dataObject.genre, dataObject.releaseYear, dataObject.runtime);
        const review = new Review(movie, dataObject.rating, dataObject.comment);
        return review;
      }

      

})();