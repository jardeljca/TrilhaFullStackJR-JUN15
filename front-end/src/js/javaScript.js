/* FrontEnd */

const botaoMenu = document.getElementById("iconeMenu");
const botaoMenuX = document.getElementById("iconeMenuX");
const botaoLogin = document.getElementById("botaoLogin");
const botaoCadastro = document.getElementById("botaoCadastro");
const botaoLoginDesktop = document.getElementById("botaoLoginDesktop");
const botaoCadastroDesktop = document.getElementById("botaoCadastroDesktop");
const menuNav = document.getElementById("menuNav");
const menuDesk = document.getElementById("menuDesktop");
const header = document.getElementById("header");
const main = document.getElementById("main");
const formLogin = document.getElementById("formLogin");
const formCadastro = document.getElementById("formCadastro");
const formLoginDesktop = document.getElementById("formLoginDesktop");
const formCadastroDesktop = document.getElementById("formCadastroDesktop");

// Inicializar estados
menuNav.style.display = "none";
formCadastro.style.display = "none";
formLoginDesktop.style.display = "none";
formCadastroDesktop.style.display = "none";

// Função para ajustar os menus com base na largura da janela
function ajustarMenus() {
  var larguraDaJanela = window.innerWidth;

  if (larguraDaJanela < 560) {
    botaoMenu.style.display = "block";
    menuDesk.style.display = "none";
    header.style.display = "flex";
    main.style.display = "flex";

    botaoMenu.addEventListener("click", () => {
      header.style.display = "none";
      main.style.display = "none";
      menuNav.style.display = "flex";
    });

    botaoMenuX.addEventListener("click", () => {
      menuNav.style.display = "none";
      header.style.display = "flex";
      main.style.display = "flex";
    });

    botaoLogin.addEventListener("click", (event) => {
      event.preventDefault();
      formLogin.style.display = "block";
      formCadastro.style.display = "none";
      botaoLogin.classList.add("ativo");
      botaoCadastro.classList.remove("ativo");
    });

    botaoCadastro.addEventListener("click", (event) => {
      event.preventDefault();
      formCadastro.style.display = "block";
      formLogin.style.display = "none";
      botaoCadastro.classList.add("ativo");
      botaoLogin.classList.remove("ativo");
    });
  } else {
    menuDesk.style.display = "flex";
    menuNav.style.display = "none";
    botaoMenu.style.display = "none";
    header.style.display = "flex";
    main.style.display = "flex";

    botaoLoginDesktop.addEventListener("click", (event) => {
      event.preventDefault();
      formLoginDesktop.style.display = "flex";
      formCadastroDesktop.style.display = "none";
    });

    botaoCadastroDesktop.addEventListener("click", (event) => {
      event.preventDefault();
      formCadastroDesktop.style.display = "flex";
      formLoginDesktop.style.display = "none";
    });
  }
}

// Ajustar menus na carga inicial
ajustarMenus();

// Ajustar menus no redimensionamento da janela
window.addEventListener("resize", ajustarMenus);

/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
/* Validação de formulários (código para validação de formulário será feito em outro momento)

//constantes dos formularios serão reutilizadas como formLogin e formCadastro
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmacaoSenha = document.getElementById("confirmacaoSenha");
 */
/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/

/* Conexão dos formulários html ao backend */

// Capturar os eventos de submissão dos formulários
 document.getElementById('formCadastroDesktop').addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = {
    nome: document.querySelector('input[name="nome"]').value,
    email: document.querySelector('input[name="email"]').value,
    senha: document.querySelector('input[name="senha"]').value,
    confirmacaoSenha: document.querySelector('input[name="confirmaSenha"]').value
  };

  axios.post('http://localhost:3000/', formData)
    .then(response => {
      alert('Usuário registrado com sucesso!');
    })
    .catch(error => {
      alert('Erro ao registrar usuário: ' + error.message);
    });
});

document.getElementById('formCadastro').addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = {
    nome: document.querySelector('input[name="nome"]').value,
    email: document.querySelector('input[name="email"]').value,
    senha: document.querySelector('input[name="senha"]').value,
    confirmacaoSenha: document.querySelector('input[name="confirmaSenha"]').value
  };

  axios.post('http://localhost:3000/', formData)
    .then(response => {
      alert('Usuário registrado com sucesso!');
    })
    .catch(error => {
      alert('Erro ao registrar usuário: ' + error.message);
    });
});

/* document.getElementById('formLoginDesktop').addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = {
    email: document.querySelector('input[name="email"]').value,
    senha: document.querySelector('input[name="senha"]').value
  };

  axios.post('http://localhost:3000/login', formData)
    .then(response => {
      alert('Login realizado com sucesso!');
    })
    .catch(error => {
      alert('Erro ao realizar login: ' + error.message);
    });
}); */