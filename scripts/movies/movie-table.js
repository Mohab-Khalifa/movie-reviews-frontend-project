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

})();