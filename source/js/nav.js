var open = document.querySelector(".page-header__toggle");

var popup = document.querySelector(".site-list");

open.addEventListener("click", function (evt) {
  "use strict";
  evt.preventDefault();
  popup.classList.toggle("site-list--show");
  open.classList.toggle("page-header__toggle--close");
});
