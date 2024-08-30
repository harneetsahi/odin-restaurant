export function pageLoad() {
  const container = document.getElementById("content");

  container.innerHTML = "";

  const homeContent = document.createElement("div");
  homeContent.classList.add("home-content");

  const headHTML = document.createElement("h2");
  headHTML.innerHTML = "Breakfast for morning kick";

  const paraHTML = document.createElement("p");

  paraHTML.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.";

  const contentImage = document.createElement("img");
  contentImage.src = "./food.jpg";

  homeContent.appendChild(headHTML);
  homeContent.appendChild(contentImage);
  homeContent.appendChild(paraHTML);
  container.appendChild(homeContent);
}
