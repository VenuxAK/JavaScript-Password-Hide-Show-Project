"use strict";

let icon = document.querySelector("#icon");
let input = document.querySelector("#pass");

icon.addEventListener("click", () => {
  if(input.type === "password"){
    input.type = "text";
    icon.className = "bi bi-eye-slash-fill"
  }else if(input.type === "text") {
    input.type = "password";
    icon.className = "bi bi-eye-fill";
  }
})

