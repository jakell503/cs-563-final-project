const form = document.querySelector("#contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const existingMsg = form.querySelector(".form-status");
  if (existingMsg) {
    existingMsg.remove();
  }

  const msg = document.createElement("p");
  msg.className = "form-status";
  msg.textContent = "Your message has been sent. Thank you!";
  msg.style.color = "green";
  form.appendChild(msg);

  form.reset();
});
