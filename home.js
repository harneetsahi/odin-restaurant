export function pageLoad() {
  const container = document.getElementById("content");

  container.innerHTML = "";

  let headHTML = document.createElement("h2");
  headHTML.innerHTML = "Breakfast for morning kick";

  let paraHTML = document.createElement("p");

  paraHTML.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.";

  let contentImage = document.createElement("img");
  contentImage.src = "./food.jpg";

  container.appendChild(contentImage);
  container.appendChild(headHTML);
  container.appendChild(paraHTML);
}
