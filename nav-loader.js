document.addEventListener("DOMContentLoaded", () => {
  const placeholder = document.getElementById("nav-placeholder");
  if (!placeholder) {
    return;
  }

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
