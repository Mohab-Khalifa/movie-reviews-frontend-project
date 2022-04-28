(function() {
    const requestManager = new RequestManager('https://jsonplaceholder.typicode.com/movies');
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

      function handleFormSubmission(event) {
        event.preventDefault(); // prevent default page refresh on submit
        const form = event.currentTarget;
        const formData = new FormData(form);
        const dataObject = Object.fromEntries(formData.entries());
  
        let movie;
        switch (requestSelector.value) {
          case 'GET':
            requestManager.setPayload('');
            requestManager.setRequestMethod('GET');
  
            requestManager.sendRequest().then(response => response.json())
                                        .then(data => renderMovieTable(data))
                                        .catch(err => handleError(err));
            break;
          case 'POST':
            movie = createMovieFromFormObj(dataObject);
            requestManager.setRequestMethod('POST');
            requestManager.setPayload(JSON.stringify(movie));
            requestManager.setHeaders({
              'Content-type': 'application/json'
            });
  
            requestManager.sendRequest().then(response => response.json())
                                        .then(data => addMovieToTable(data))
                                        .catch(err => handleError(err));
            break;
          case 'PUT':
            movie = createMovieFromFormObj(dataObject);
            break;
          case 'DELETE':
  
            break;
        }
      }

})();