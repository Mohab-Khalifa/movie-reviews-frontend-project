(function() {
    const dataForm = document.querySelector('#data-form');
    const id = document.querySelector('#id');

    function findById() {
        setStatus('Finding movie to delete...')
        fetch(`http://localhost:8080/movie/${id.value}`, {
            method: 'GET'
        }).then(response => {
            if (response.ok) return response.json();
            else throw new Error('Uh oh, something went wrong...');
        })
          .then(movie => {
            confirm = window.confirm("Are you sure you want to delete " + movie.title + "?")
            if (confirm) {
                remove();
            }
        })
          .catch(error => {
            setStatus('ERROR ENCOUNTERED');
            handleError(error);
        });
    }

    function remove() {
        fetch(`http://localhost:8080/movie/${id.value}`, {
            method: 'DELETE'
        }).then(response => {
            if (response.ok) return response.json();
            else throw new Error('Uh oh, something went wrong...');
        }).then(json => {
            setStatus('MOVIE DELETED');
            console.log(json);
        }).catch(error => {
            setStatus('FAILED TO DELETE MOVIE');
            handleError(error);
        });
    }

    dataForm.addEventListener('submit', function(event) {
        event.preventDefault();
        findById();
    });

})();