const form = document.querySelector("#contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const msg = document.createElement("p");
  msg.textContent = "Success";
  msg.style.color = "green";
  form.appendChild(msg);

  setTimeout(() => {
    form.reset();
    msg.remove();
  }, 1000);
});
