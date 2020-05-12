var close = document.querySelector(".page-header__toggle");

var popup = document.querySelector(".site-list");

close.addEventListener("click", function (evt) {
  "use strict";
  evt.preventDefault();
  popup.classList.toggle("site-list--close");
  close.classList.toggle("page-header__toggle--open");
});
