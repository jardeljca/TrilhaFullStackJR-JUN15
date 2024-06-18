const botaoMenu = document.getElementById("iconeMenu");
const botaoMenuX = document.getElementById("iconeMenuX");
const menuNav = document.getElementById("menuNav");
const header = document.getElementById("header");
//const main = document.getElementById("main");
var larguraDaJanela = window.innerWidth;

menuNav.style.display = "none";

if (larguraDaJanela < 560) {
  
    botaoMenu.addEventListener("click", () => {
      header.style.display = "none";
      //main.style.display = "none";
      menuNav.style.display = "flex";
    });

    botaoMenuX.addEventListener("click", () => {
      menuNav.style.display = "none";
      header.style.display = "flex";
      //main.style.display = "flex";
    });
}