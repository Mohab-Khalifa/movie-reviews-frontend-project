(function() {
    const dataTable = document.querySelector('#data-table');
    const dataForm = document.querySelector('#data-form');

    function createMovieFromFormObj(dataObject) {
        const movie = new Movie(dataObject.title, dataObject.genre, dataObject.releaseYear, dataObject.runtime);
        return movie;
    }

    function create() {

        const formData = new FormData(dataForm);
        const formDataObject = Object.fromEntries(formData.entries());

        setStatus('PREPARING POST REQUEST');

        fetch('http://localhost:8080/movie', { 
            method: 'POST', 
            body: JSON.stringify(createMovieFromFormObj(formDataObject), console.log(formDataObject)),
            headers: {
                'Content-type': 'application/json' 
            }
        }).then(response => {
            setStatus('RECEIVED RESPONSE');

            if (response.ok) return response.json();
            else throw new Error('something went wrong with the request');
        })
          .then(movie => {
            setStatus('RENDERING TABLE');
            
            renderMovieTable([movie], dataTable);
            setStatus('RESPONSE RENDERED INTO TABLE');
        })
          .catch(error => {
            setStatus('ERROR ENCOUNTERED');
            handleError(error);
        });
    }

    function handleFormSubmission(event) {
        
        event.preventDefault(); 
        create();
    }

    dataForm.addEventListener('submit', handleFormSubmission);

})();