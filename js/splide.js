var splide = new Splide(".splide", {
  type     : 'loop',
  // width   : '5rem',
  focus    : 'center',
  padding: "10rem",
});

splide.mount();

// const splideBtn = document.querySelectorAll(".splide__arrow");

// if (splideBtn != undefined) {
//   splideBtn.forEach((e) => {
//     e.addEventListener("click", () => {
//       removeStyleSlide();
//       styleActiveSlide();
//     });
//   });

//   function removeStyleSlide() {
//     let prevSlide = document.querySelector(".is-prev");
//     let nextSlide = document.querySelector(".is-next");

//     if (nextSlide.classList.contains("style-active")) {
//       nextSlide.classList.remove("style-active");
//     } else {
//       prevSlide.classList.remove("style-active");
//     }
//   }

//   function styleActiveSlide() {
//     let activeSlide = document.querySelector(".is-active");
//     activeSlide.classList.add("style-active");
//   }

//     styleActiveSlide();
// }
