"use strict";

const sections = document.querySelectorAll("section");

// Tager fat on browservinduet og gøre nogt ved det
window.onscroll = () => {
  sections.forEach((sec) => {
    // Får nuværende scrollposition
    let scrollDistance = window.scrollY;
    // får sektionens position ift. toppen af dokumentet
    let secDistance = sec.offsetTop;
    // hvis sectionen er kommet ind i synsfeltet, så tilføjes der "show-animate", eller fjernes den
    if (scrollDistance >= secDistance) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};

const secOne = document.querySelector(".sec1");
secOne.addEventListener("mouseover", function () {
  this.classList.add("scale");
});

secOne.addEventListener("mouseout", function () {
  this.classList.remove("scale");
});

const horse = document.getElementById("horseElem");
const horseSound = new Audio();
horseSound.src = "/sound/horse.mp3";

if (horse) {
  horse.addEventListener("click", () => {
    horseSound.play();
  });
}

if (horse) {
  horse.addEventListener("click", function () {
    this.classList.toggle("anim-scale");
  });
}

const dogs = document.getElementById("dogElem");
const dogsSound = new Audio();
dogsSound.src = "/sound/dog.mp3";

if (dogs) {
  dogs.addEventListener("click", () => {
    dogsSound.play();
  });
}

const polarBears = document.getElementById("bearElem");
const bearsSound = new Audio();
bearsSound.src = "/sound/polarBears.mp3";
if (polarBears) {
  polarBears.addEventListener("click", () => {
    bearsSound.play();
  });
}

const desert = document.getElementById("desertElem");
desert.addEventListener("click", function () {
  desert.classList.toggle("animate");
  desert.classList.toggle("rotate");
});
