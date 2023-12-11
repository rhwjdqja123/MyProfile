let mainText = document.querySelector(".project__box");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("scrollY", value);

  if (value > 150) {
    mainText.style.animation = "disappear 1s ease-out forwards";
  } else {
    mainText.style.animation = "slide 1s ease-out";
  }
});

let mmainText = document.querySelector(".project__boxx");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("scrollY", value);

  if (value > 400) {
    mmainText.style.animation = "disappearr 1s ease-out forwards";
  } else {
    mmainText.style.animation = "slide 1s ease-out";
  }
});
let mmmainText = document.querySelector(".project__boxxx");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("scrollY", value);

  if (value > 500) {
    mmmainText.style.animation = "disappearrr 1s ease-out forwards";
  } else {
    mmmainText.style.animation = "slide 1s ease-out";
  }
});
