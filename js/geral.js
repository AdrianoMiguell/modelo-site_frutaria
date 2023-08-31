const navbarCollapse = document.querySelector(".navbar-collapse");

if (navbarCollapse != undefined) {
  navbarCollapse.addEventListener("click", () => {
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.add("activedCollapse");
      console.log("Collapse ativado");
    } else {
      navbarCollapse.classList.remove("activedCollapse");
      console.log("Collapse desativado");
    }
  });
}
