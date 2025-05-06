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


    /* LOGIN */

        const btnLogin = document.getElementById('btn-login');
        const btnRegister = document.getElementById('btn-register');
        const formLogin = document.getElementById('form-login');
        const formRegister = document.getElementById('form-register');
        const toRegister = document.getElementById('to-register');
        const toLogin = document.getElementById('to-login');

        function showLogin() {
            btnLogin.classList.add('active');
            btnRegister.classList.remove('active');
            formLogin.classList.add('active');
            formRegister.classList.remove('active');
        }
        function showRegister() {
            btnRegister.classList.add('active');
            btnLogin.classList.remove('active');
            formRegister.classList.add('active');
            formLogin.classList.remove('active');
        }

        btnLogin.addEventListener('click', showLogin);
        btnRegister.addEventListener('click', showRegister);
        toRegister.addEventListener('click', e => { e.preventDefault(); showRegister(); });
        toLogin.addEventListener('click', e => { e.preventDefault(); showLogin(); });
        // Adicionando evento de submit ao formulário de login