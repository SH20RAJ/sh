/*!
Strobe Flashlight
Copyright (c) 2024 by Wakana Y.K. (https://codepen.io/wakana-k/pen/abxERMV)
*/
"use strict";
console.clear();

var root = document.querySelector(":root");
function spotlight(e) {
  root.style.setProperty("--x", e.pageX + "px");
  root.style.setProperty("--y", e.pageY + "px");
}
window.addEventListener("pointermove", spotlight);
window.addEventListener("pointerdown", spotlight);