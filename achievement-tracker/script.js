document.querySelector("#copyright").textContent = new Date().getFullYear().toString();

document.addEventListener("click", toggleDropdown);
document.addEventListener("keydown", e => {
  if (e.key === "Enter" || e.key === " ") {
    toggleDropdown(e);
  }
});

function toggleDropdown(e) {
  const button = e.target.closest("[data-dropdown-button]");
  if (!button && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown;
  if (button) {
    currentDropdown = e.target.closest("[data-dropdown]");
    if (currentDropdown) {
      const isActive = currentDropdown.classList.toggle("active");
      button.setAttribute("aria-expanded", isActive);
      if (isActive) {
        const firstItem = currentDropdown.querySelector("a");
        if (firstItem) firstItem.focus();
      } else {
        button.focus();
      }
    }
  }

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
    const dropdownButton = dropdown.closest("[data-dropdown-button]");
    if (dropdownButton) dropdownButton.setAttribute("aria-expanded", false);
  });
}

