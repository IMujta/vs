let tShart = document.querySelector("#articles");
let tShartTitle = document.querySelector("#articles .mine-title");
let befor = document.querySelector("#articles .mine-title .bot-dot");
let after = document.querySelector("#articles .mine-title .top-dot");

let cup = document.querySelector("#cup");
let cupTitle = document.querySelector("#cup .mine-title");
let cupbefor = document.querySelector("#cup .mine-title .bot-dot");
let cupafter = document.querySelector("#cup .mine-title .top-dot");

let postrs = document.querySelector("#postrs");
let postrsTitle = document.querySelector("#postrs .mine-title");
let postrsbefor = document.querySelector("#postrs .mine-title .bot-dot");
let postrsafter = document.querySelector("#postrs .mine-title .top-dot");


window.onscroll = function () {
  if (window.scrollY >= tShart.offsetTop - 10) {
    befor.classList.add("animation")
    after.classList.add("animation")
    tShartTitle.classList.add("tilte-animation")
  } else {
    befor.classList.remove("animation")
    after.classList.remove("animation")
    tShartTitle.classList.remove("tilte-animation")
  }

  if (window.scrollY >= cup.offsetTop - 10) {
    cupbefor.classList.add("animation")
    cupafter.classList.add("animation")
    cupTitle.classList.add("tilte-animation")
  } else {
    cupbefor.classList.remove("animation")
    cupafter.classList.remove("animation")
    cupTitle.classList.remove("tilte-animation")
  }

  if (window.scrollY >= postrs.offsetTop - 10) {
    postrsbefor.classList.add("animation")
    postrsafter.classList.add("animation")
    postrsTitle.classList.add("tilte-animation")
  } else {
    postrsbefor.classList.remove("animation")
    postrsafter.classList.remove("animation")
    postrsTitle.classList.remove("tilte-animation")
  }
}
// --------------------------------------------
// Timer
let timerContaner = document.querySelector(".landing .data .timer");
let clockDays = document.querySelector(".days .time");
let clockhours = document.querySelector(".hours .time");
let clockmins = document.querySelector(".min .time");
let clocksecs = document.querySelector(".sec .time");

let endOfThisYear = new Date("Nov 12, 2023 23:59:59").getTime();

let counter = setInterval(() => {
  let currntDate = new Date().getTime();
  let timeLeft = endOfThisYear - currntDate;

  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let secs = Math.floor((timeLeft % (1000 * 60)) / (1000));
  clockDays.innerHTML = days;
  clockhours.innerHTML = hours.toString().padStart(2, 0);
  clockmins.innerHTML = mins.toString().padStart(2, 0);
  clocksecs.innerHTML = secs.toString().padStart(2, 0);
  if (days === 0 && hours === 0 && mins === 0 && secs === 0) {
    clearInterval(counter);
  }
}, 1000);

// --------------------------------------------
let vs = document.querySelector(".landing .data .vs");
let imgContaner = document.querySelector(".background-images");
let boxs = document.querySelectorAll(".landing .data .box");
let audio1 = document.querySelector("audio.rami");
let audio2 = document.querySelector("audio.rayan");
let theam = document.querySelector(".mine-thame");
let storDiv = document.querySelector(".white-cover");
let iframies = document.querySelectorAll(".ifram-container");
let ramiImg = document.querySelector(".rami-box img");
let rayanImg = document.querySelector(".rayan-box img");
let navBar = document.querySelector(".nav-bar");
let m7Img = document.querySelector(".nav-bar .m7-img");
let muteBtn = document.querySelector(".nav-bar .mute i");
let areMuted = false;

vs.onclick = function () {
  audio1.play();
  audio1.volume = 0.2;
  audio2.play();
  audio2.volume = 0.2;
  theam.play();
  theam.volume = 0.02;
  // -------------------------
  navBar.classList.add("vs");
  storDiv.classList.add("vs");
  // -------------------------
  imgContaner.classList.add("vs");
  // -------------------------
  iframies.forEach((frami) => {
    frami.classList.add("active")
  })
  // -------------------------
  ramiImg.src = "images/ramiP.JPG";
  ramiImg.classList.add("active")

  rayanImg.src = "images/rayanP.JPG";
  rayanImg.classList.add("active");
  // -------------------------
  boxs.forEach((box) => {
    box.classList.add("active");
  })
  // -------------------------
  timerContaner.classList.add("active");
  vs.classList.add("active");
}

m7Img.onclick = function () {
  theam.pause();
  theam.currentTime = 0;
  // -------------------------
  navBar.classList.remove("vs");
  storDiv.classList.remove("vs");
  // -------------------------
  imgContaner.classList.remove("vs");
  // -------------------------
  iframies.forEach((frami) => {
    frami.classList.remove("active")
  })
  // -------------------------
  ramiImg.src = "images/rami.JPG";
  ramiImg.classList.remove("active")

  rayanImg.src = "images/rayan.JPG";
  rayanImg.classList.remove("active");
  // -------------------------
  boxs.forEach((box) => {
    box.classList.remove("active");
  })
  // -------------------------
  timerContaner.classList.remove("active");
  vs.classList.remove("active");
};

muteBtn.onclick = function () {
  if (areMuted) {
    theam.volume = 0.02;
    this.className = "fa-solid fa-volume-high";
    areMuted = false;
  } else {
    theam.volume = 0;
    this.className = "fa-solid fa-volume-xmark";
    areMuted = true;
  }

};

// -----------------------------