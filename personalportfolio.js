var navSlide = function () {
  /*var burger = document.querySelector(".burger");
  var nav = document.querySelector(".nav-links");*/

  burger.addEventListener("click", function () {
    nav.classList.toggle("nav-active");
  });
};
navSlide();
