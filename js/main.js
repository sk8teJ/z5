const toggle = document.getElementById("menu-toggle");
document.querySelectorAll(".menu a").forEach((link) => link.addEventListener("click", () => { toggle.checked = false; }));
document.addEventListener("keydown", (event) => { if (event.key === "Escape") toggle.checked = false; });