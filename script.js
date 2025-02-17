// Tab Navigation
function openTab(event, tabId) {
  let tabLinks = document.querySelectorAll(".tab-link");
  let tabContents = document.querySelectorAll(".tab-content");

  tabLinks.forEach(link => link.classList.remove("active"));
  tabContents.forEach(content => content.classList.remove("active"));

  event.currentTarget.classList.add("active");
  document.getElementById(tabId).classList.add("active");
}

// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

