function fetchData(number) {
    fetch(`/api/compute/${number}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const resultContainer = document.getElementById('resultContainer');
        resultContainer.innerHTML = `Computed Result: ${data.result}`;
      })
      .catch(error => {
        console.error(error);
      });
  }
  