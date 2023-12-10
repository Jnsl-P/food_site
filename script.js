let topLayer = document.querySelector(".top");
let bottomLayer = document.querySelector(".bottom");
let search = document.querySelector(".search");
let explore = document.querySelector(".explore");
let description1 = document.querySelector(".description1");
let description2 = document.querySelector(".description2");
let search_icon = document.getElementById("search_icon");
let input = document.getElementById("button");
let content1 = document.querySelector(".content-body1");
let content2 = document.querySelector(".content-body2");
let buttons = document.querySelectorAll(".button2");
let buttonsArray = Array.from(buttons);

localStorage.clear();

topLayer.addEventListener("mouseover", function () {
  topLayer.style.width = "80vw";
  search.style.fontSize = "1150%";
  explore.style.fontSize = "500%";
  description1.style.fontSize = "8px";
  content2.style.transition = "0.5s";
  content2.style.width = "15%";

  buttonsArray.map((e) => {
    e.style.transition = "0.5s";
    e.style.fontSize = "100%";
  });
});

topLayer.addEventListener("mouseout", function () {
  topLayer.style.width = "50vw";
  search.style.fontSize = "";
  explore.style.fontSize = "";
  description2.style.fontSize = "";
  description1.style.fontSize = "";
  document.querySelector(".content-body").style.width = "25%";

  document.querySelector(".content-body1").style.width = "25%";
  document.querySelector(".content-body1").style.transition = "0.5s";

  content2.style.transition = "0.5s";
  content2.style.width = "";

  buttonsArray.map((e) => {
    e.style.transition = "0.5s";
    e.style.fontSize = "";
  });
});

bottomLayer.addEventListener("mouseover", function () {
  topLayer.style.width = "20vw";
  explore.style.fontSize = "1150%";
  search.style.fontSize = "500%";
  description2.style.fontSize = "8px";
  document.querySelector(".content-body1").style.width = "15%";
});

bottomLayer.addEventListener("mouseout", function () {
  topLayer.style.width = "50vw";
  explore.style.fontSize = "";
  search.style.fontSize = "";
  description1.style.fontSize = "";
  description2.style.fontSize = "";
  document.querySelector(".content-body2").style.width = "25%";
  document.querySelector(".content-body1").style.width = "";
});

// clicked button meal category
buttonsArray.map((e) => {
  e.addEventListener("click", function () {
    window.location.href = "./page_search/featured.html";
    localStorage.setItem("default_search", e.id);
  });
});

// search arrow button
let search_homepage = document.querySelector(".search_homepage");
search_icon.addEventListener("click", function () {
  if (input.value !== "") {
    window.location.href = "./page_search/featured.html";
    localStorage.setItem("default_search", search_homepage.value);
  }
});

// search bar
input.addEventListener("click", function update() {
  input.style.transition = "0.3s";
  input.style.width = "70%";
});

// search bar focus out
input.addEventListener("focusout", function update() {
  input.style.width = "40%";
});

// enter key
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    if (input.value !== "") {
      localStorage.setItem("default_search", input.value);
      window.location.href = "./page_search/featured.html";
    }
  }
});
