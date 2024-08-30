const drinks = [
  {
    title: "Black Coffee",
    price: "$3",
  },
  {
    title: "Latte",
    price: "$5",
  },
  {
    title: "Orange Juice",
    price: "$7",
  },
  {
    title: "Iced Coffee",
    price: "$6",
  },
  {
    title: "Iced Tea",
    price: "$6",
  },
];

const food = [
  {
    title: "Pancakes",
    price: "$12",
  },
  {
    title: "Eggs and toast",
    price: "$8",
  },
  {
    title: "Waffles",
    price: "$12",
  },
  {
    title: "Plain toast",
    price: "$3",
  },
  {
    title: "Chicken sandwich",
    price: "$12",
  },
  {
    title: "Veggie sandwich",
    price: "$12",
  },
];

export function menuLoad() {
  const container = document.getElementById("content");

  container.innerHTML = "";

  let menuHeading = document.createElement("h2");
  menuHeading.innerText = "Classic and Simple";
  menuHeading.classList.add("menu");
  container.appendChild(menuHeading);

  let drinksContainer = document.createElement("div");
  let drinksHead = document.createElement("h3");
  drinksHead.textContent = "Drinks";
  drinksContainer.appendChild(drinksHead);
  drinksContainer.classList.add("item-container");
  container.appendChild(drinksContainer);

  let foodContainer = document.createElement("div");
  let foodHead = document.createElement("h3");
  foodHead.textContent = "Food";
  foodContainer.classList.add("item-container");
  foodContainer.appendChild(foodHead);
  container.appendChild(foodContainer);

  const drinksList = document.createElement("ul");
  const foodList = document.createElement("ul");

  drinks.forEach((drink) => {
    const drinkItems = document.createElement("li");
    drinkItems.textContent = `${drink.title}: ${drink.price}
    `;
    drinksList.appendChild(drinkItems);
  });

  food.forEach((item) => {
    const foodItems = document.createElement("li");
    foodItems.textContent = `${item.title}: ${item.price}
    `;
    foodList.appendChild(foodItems);
  });

  drinksContainer.appendChild(drinksList);
  foodContainer.appendChild(foodList);
}
