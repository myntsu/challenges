document.querySelector(
  "#copyright"
).textContent = new Date().getFullYear().toString();

document.addEventListener("click", function (e) {
  const button = e.target.closest("[data-dropdown-button]");
  let currentDropdown;

  if (button) {
    currentDropdown = button.parentElement;
    toggleDropdown(currentDropdown);
  } else if (!e.target.closest("[data-dropdown]")) {
    document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
      dropdown.classList.remove("active");
      const dropdownButton = dropdown.querySelector("[data-dropdown-button]");
      if (dropdownButton) {
        dropdownButton.setAttribute("aria-expanded", false);
        const anchors = dropdown.querySelectorAll(".dropdown a");
        anchors.forEach((anchor) => {
          anchor.setAttribute("aria-hidden", "true");
          anchor.setAttribute("tabindex", "-1");
        });
      }
    });
  }
});

const hamburger = document.querySelector(".hamburger-menu");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  const isExpanded = nav.getAttribute("aria-expanded") === "true";
  nav.setAttribute("aria-expanded", !isExpanded);
  nav.classList.toggle("visible");
});

// Settings
const settingsDialog = document.querySelector("#settingsDialog");
const confirmDialog = document.querySelector("#confirmDialog");
const openButton = document.querySelector("#openSettings");
const closeButton = document.querySelector("#closeSettings");
const applyButton = document.querySelector("#applySettings");
const toggleButton = document.querySelector("#toggleMode");
const confirmYesButton = document.querySelector("#confirmYes");
const confirmNoButton = document.querySelector("#confirmNo");

let isDirty = false;
let tempSettings = {
  isDarkMode: true
};

if (localStorage.getItem("settings")) {
  tempSettings = JSON.parse(localStorage.getItem("settings"));
  applySettings(tempSettings);
}

openButton.addEventListener("click", function () {
  this.setAttribute("aria-pressed", "true");
  settingsDialog.showModal();
});

closeButton.addEventListener("click", function () {
  if (isDirty) {
    confirmDialog.showModal();
  } else {
    settingsDialog.close();
    openButton.setAttribute("aria-pressed", "false");
  }
});

applyButton.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("settings", JSON.stringify(tempSettings));
  applySettings(tempSettings);
  isDirty = false;
  settingsDialog.close();
  openButton.setAttribute("aria-pressed", "false");
});

toggleButton.addEventListener("click", function () {
  tempSettings.isDarkMode = !tempSettings.isDarkMode;
  isDirty = true;
});

confirmYesButton.addEventListener("click", function () {
  confirmDialog.close();
  settingsDialog.close();
  openButton.setAttribute("aria-pressed", "false");
});

confirmNoButton.addEventListener("click", function () {
  confirmDialog.close();
});

window.addEventListener("click", function (event) {
  if (event.target === settingsDialog) {
    if (isDirty) {
      confirmDialog.showModal();
    } else {
      settingsDialog.close();
      openButton.setAttribute("aria-pressed", "false");
    }
  }
});

function applySettings(settings) {
  document.documentElement.style.setProperty(
    "--background",
    settings.isDarkMode ? "0 0% 6%" : "0 0% 23%"
  );
}
