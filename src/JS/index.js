const botaoMenu = document.getElementById("iconeMenu");
const botaoMenuX = document.getElementById("iconeMenuX");
const menuNav = document.getElementById("menuNav");
const header = document.getElementById("header");
const main = document.getElementById("main");
const formLogin = document.getElementById("formLogin");
const formCadastro = document.getElementById("formCadastro");
const botaoLogin = document.getElementById("botaoLogin");
const botaoCadastro = document.getElementById("botaoCadastro");
var larguraDaJanela = window.innerWidth;

menuNav.style.display = "none";
formCadastro.style.display = "none";

if (larguraDaJanela < 560) {

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
    botaoLogin.classList.add('ativo');
    botaoCadastro.classList.remove('ativo');
  });

  botaoCadastro.addEventListener("click", (event) => {
    event.preventDefault();
    formCadastro.style.display = "block";
    formLogin.style.display = "none";
    botaoCadastro.classList.add('ativo');
    botaoLogin.classList.remove('ativo');
  });
}