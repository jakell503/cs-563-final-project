// Look for the nav-placeholder element and load the navigation HTML into it
document.addEventListener("DOMContentLoaded", () => {
  const placeholder = document.getElementById("nav-placeholder");
  if (!placeholder) {
    return;
  }
  // Highlight the current page
  const setActiveNavLink = () => {
    const currentPath =
      window.location.pathname.split("/").pop() || "index.html";
    const navLinks = placeholder.querySelectorAll("nav a");

    navLinks.forEach((link) => {
      const linkPath = link.getAttribute("href")?.split("/").pop();
      if (linkPath === currentPath) {
        link.classList.add("active-page");
      }
    });
  };
  // Load the navigation HTML from nav.html and insert it into the placeholder
  fetch("nav.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load nav.html");
      }
      return response.text();
    })
    .then((data) => {
      placeholder.innerHTML = data;
      setActiveNavLink();
    })
    .catch((error) => {
      console.error("Unable to load navigation:", error);
    });
});
