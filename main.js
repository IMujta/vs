window.onload = function () {
  document.querySelector("video").play();
}

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
let vs = document.querySelector(".landing .data .vs");
let dataContaner = document.querySelector(".landing .data");
let backGimage1 = document.querySelectorAll(".background-images img")[0];
let backGimage2 = document.querySelectorAll(".background-images img")[1];
let boxs = document.querySelectorAll(".landing .data .box");
let audio1 = document.querySelector("audio.rami");
let audio2 = document.querySelector("audio.rayan");
let theam = document.querySelector(".mine-thame");
let storDiv = document.querySelector(".white-cover");
let iframies = document.querySelectorAll(".ifram-container");
let ramiImg = document.querySelector(".rami-box img");
let rayanImg = document.querySelector(".rayan-box img");
let navBar = document.querySelector("nav.container");
let clicked = false;

vs.onclick = function () {
  if (clicked) {
    location.reload();
  } else {
    audio1.play();
    audio1.volume = 0.2;
    audio2.play();
    audio2.volume = 0.2;
    theam.play();
    theam.volume = 0.01;
    // -------------------------
    navBar.innerHTML = "<img src='/images/m7.gif'>"
    navBar.classList.add("vs")
    storDiv.style.display = "none";
    clicked = true;
    // -------------------------
    backGimage1.style.left = "0px";
    backGimage2.style.right = "0px";
    backGimage1.style.hieght = "100%";
    backGimage2.style.hieght = "100%";
    // -------------------------
    iframies.forEach((frami) => {
      frami.style.bottom = "50px";
      frami.style.opacity = "1";
    })
    // -------------------------
    ramiImg.style.top = "20px"
    ramiImg.style.left = "20px"
    ramiImg.style.transform = "translate(0%, 0%)"
    ramiImg.src = "/images/ramiP.JPG";
    ramiImg.style.borderRadius = "50%"

    rayanImg.style.top = "20px"
    rayanImg.style.left = "67%"
    rayanImg.style.transform = "translate(0%, 0%)"
    rayanImg.src = "/images/rayanP.JPG";
    rayanImg.style.borderRadius = "50%"
    // -------------------------
    boxs.forEach((box) => {
      box.style.width = "100%";
    })
    // -------------------------
    // dataContaner.style.width = "100%"
    // boxs.forEach((box) => {
    //   box.style.alignSelf = "flex-start";
    // })
    // chimpionImags.forEach((img) => {
    //   img.style.transform = "translateX(0%)";
    // })
    // vs.style.marginTop = "-190px"
    // ramiFram.style.left = "200px";
    // rayanFram.style.right = "192px";
    // ramiFram.style.opacity = "1";
    // rayanFram.style.opacity = "1";
  }
}

// -----------------------------

console.log()
