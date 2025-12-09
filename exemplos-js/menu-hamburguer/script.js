const btn = document.getElementById("hamburguer-button");
const menu = document.getElementById("menu");
btn.classList.add("hamburguer-button-js-enable");

closeMenu();

function closeMenu() {
  btn.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-hidden", "true");
  menu.classList.add("menu-closed");
}

function openMenu() {
  btn.setAttribute("aria-expanded", "true");
  menu.setAttribute("aria-hidden", "false");
  menu.classList.remove("menu-closed");
}

function toggleMenu() {
  let expanded = this.getAttribute("aria-expanded") === "true";

  document.removeEventListener("click", closeMenu);

  const novoEstado = !expanded;

  this.setAttribute("aria-expanded", String(novoEstado));
  menu.setAttribute("aria-hidden", String(!novoEstado));

  menu.classList.toggle("menu-closed", !novoEstado);

  setTimeout(() => document.addEventListener("click", closeMenu), 1);
}

btn.addEventListener("click", toggleMenu);

const mediaQuery = window.matchMedia("(min-width: 768px)");

function HandleMediaQueryChange(e) {
  if (e.matches) {
    openMenu();
  } else {
    closeMenu();
  }
}

mediaQuery.addEventListener("change", HandleMediaQueryChange);
HandleMediaQueryChange(mediaQuery);
