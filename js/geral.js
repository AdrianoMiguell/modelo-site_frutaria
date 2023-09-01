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

const navbarToggle = document.querySelector(".navbar-toggler");

if (navbarToggle != undefined) {
  navbarToggle.addEventListener("click", () => {
    let spanOpen = document.querySelector(".navbar-toggler .open");
    let spanCloused = document.querySelector(".navbar-toggler .cloused");

    btnClicked(spanOpen, spanCloused);
  });

  function btnClicked(eOpen, eCloused) {
    if (eOpen.classList.contains("block")) {
      eOpen.classList.remove("block");
      eCloused.classList.add("block");
      // setTimeout(() => {
      //   eCloused.style.display = "none";
      // }, 250);
    } else {
      eOpen.classList.add("block");
      eCloused.classList.remove("block");
      // setTimeout(() => {
      //   eOpen.style.display = "none";
      // }, 250);
    }
  }
}
