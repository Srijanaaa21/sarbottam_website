var btn = document.getElementById("menu-btn");
var menu = document.getElementById("menu");
var body = document.getElementsByTagName("body");

//Toggle
btn.addEventListener(
  "click",
  function (e) {
    console.log("Button clicked");
    menu.classList.toggle("open");
    body[0].classList.toggle("no-scroll");
  },
  false
);

//   //Preview
//   window.onload = function () {
//     setTimeout(function () {
//       menu.classList.add("open");

//       setTimeout(function () {
//         menu.classList.remove("open");
//       }, 1200);
//     }, 600);
//   };
