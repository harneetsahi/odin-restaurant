export function contactLoad() {
  const container = document.getElementById("content");

  container.innerHTML = "";

  const contactHead = document.createElement("h2");
  contactHead.classList.add("contact-head");
  contactHead.innerText = "Contact us";

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-info");

  const contactName = document.createElement("p");
  contactName.textContent = "Breakfast Nook Ltd";
  const contactPhone = document.createElement("p");
  contactPhone.textContent = "(414) 234-3242";
  const contactEmail = document.createElement("p");
  contactEmail.textContent = "breakfastnook@mail.ca";

  const hoursHead = document.createElement("h2");
  hoursHead.classList.add("hours-head");
  hoursHead.textContent = "Hours";
  const hours = document.createElement("p");
  hours.textContent = "Monday to Saturday: 8AM to 1PM";

  contactInfo.appendChild(contactName);
  contactInfo.appendChild(contactPhone);
  contactInfo.appendChild(contactEmail);
  contactInfo.appendChild(hoursHead);
  contactInfo.appendChild(hours);

  container.appendChild(contactHead);
  container.appendChild(contactInfo);
}
