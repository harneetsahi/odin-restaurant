import { pageLoad } from "./home.js";
import { menuLoad } from "./menu.js";
import { contactLoad } from "./contact.js";

window.addEventListener("DOMContentLoaded", () => {
  pageLoad();
});

const homeBtn = document.querySelector(".home");
homeBtn.addEventListener("click", () => {
  pageLoad();
});

const menuBtn = document.querySelector(".menu");
menuBtn.addEventListener("click", () => {
  menuLoad();
});

const contactBtn = document.querySelector(".contact");
contactBtn.addEventListener("click", () => {
  contactLoad();
});
