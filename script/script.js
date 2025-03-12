    // Usando fetch para carregar o conteúdo da navbar.html
    fetch('../components/header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header').innerHTML = data;
      })
      .catch(error => console.error('Erro ao carregar a header:', error));

    fetch('../components/navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;
    })
    .catch(error => console.error('Erro ao carregar a navbar:', error));

    fetch('../components/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Erro ao carregar a footer:', error));