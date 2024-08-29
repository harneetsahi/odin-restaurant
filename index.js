import { pageLoad } from "./home.js";

const homeBtn = document.querySelector(".home");
homeBtn.addEventListener("click", () => {
  pageLoad();
});


