document.addEventListener("DOMContentLoaded", () => {
  const placeholder = document.getElementById("nav-placeholder");
  if (!placeholder) {
    return;
  }

  fetch("nav.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load nav.html");
      }
      return response.text();
    })
    .then((data) => {
      placeholder.innerHTML = data;
    })
    .catch((error) => {
      console.error("Unable to load navigation:", error);
    });
});
