(function() {
    const formInputs = document.querySelectorAll(".container input");
    const id = document.querySelector("#id");
    const dataForm = document.querySelector("#data-form");
    const dataTable = document.querySelector("#data-table");

    function createMovieFromFormObj(dataObject) {
        const movie = new Movie(
            dataObject.title,
            dataObject.genre,
            dataObject.releaseYear,
            dataObject.runtime,
        );
        return movie;
    }

    function updateMovie() {
        const formData = new FormData(dataForm);
        const formDataObject = Object.fromEntries(formData.entries());

        setStatus("PREPARING UPDATE REQUEST");

        fetch(`http://localhost:8080/movie/${id.value}`, {
                method: "PUT", 
                body: JSON.stringify(createMovieFromFormObj(formDataObject)),
                headers: {
                    "Content-type": "application/json", 
                },
            })
            .then((response) => {
                setStatus("RECEIVED RESPONSE");
                if (response.ok) return response.json();
                else throw new Error("Uh oh, something went wrong...");
            })
            .then((movie) => {
                setStatus("RENDERING TABLE");
                renderMovieTable([movie], dataTable);
                setStatus("RESPONSE RENDERED INTO TABLE");
            })
            .catch((error) => {
                setStatus("ERROR ENCOUNTERED");
                handleError(error);
            });
    }

    function readById() {
        setStatus("PREPARING GET REQUEST");

        return fetch(`http://localhost:8080/movie/${id.value}`, {
                method: "GET",
            })
            .then((response) => {
                setStatus("RECEIVED RESPONSE");
                if (response.ok) return response.json();
                else throw new Error("Uh oh, something went wrong...");
            })
            .then((movie) => {
                return movie;
            })
            .catch((error) => {
                setStatus("ERROR ENCOUNTERED");
                handleError(error);
            });
    }

    id.addEventListener("change", function(event) {
        readById(id.value).then((movie) => {

            formInputs[1].value = movie.title;
            formInputs[2].value = movie.genre;
            formInputs[3].value = movie.releaseYear;
            formInputs[4].value = movie.runtime;
        });
    });

    function handleFormSubmission(event) {
        event.preventDefault();
        updateMovie();
    }

    dataForm.addEventListener("submit", handleFormSubmission);
})();