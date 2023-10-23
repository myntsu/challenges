document.querySelector("#copyright").textContent = new Date().getFullYear().toString();

document.addEventListener("click", function(e) {
  const button = e.target.closest("[data-dropdown-button]");
  let currentDropdown;

  if (button) {
    currentDropdown = button.parentElement;
    toggleDropdown(currentDropdown);
  } else if (!e.target.closest("[data-dropdown]")) {
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
      dropdown.classList.remove("active");
      const dropdownButton = dropdown.querySelector("[data-dropdown-button]");
      if (dropdownButton) {
        dropdownButton.setAttribute("aria-expanded", false);
        const anchors = dropdown.querySelectorAll(".dropdown a");
        anchors.forEach(anchor => {
          anchor.setAttribute("aria-hidden", "true");
          anchor.setAttribute("tabindex", "-1");
        });
      }
    });
  }
});

function toggleDropdown(dropdown) {
  const button = dropdown.querySelector("[data-dropdown-button]");
  const isActive = dropdown.classList.toggle("active");

  button.setAttribute("aria-expanded", isActive);
  const anchors = dropdown.querySelectorAll(".dropdown a");

  if (isActive) {
    anchors.forEach(anchor => {
      anchor.setAttribute("aria-hidden", "false");
      anchor.setAttribute("tabindex", "0");
    });
    const firstItem = anchors[0];
    if (firstItem) firstItem.focus();
  } else {
    anchors.forEach(anchor => {
      anchor.setAttribute("aria-hidden", "true");
      anchor.setAttribute("tabindex", "-1");
    });
    button.focus();
  }
}

// Get the button and nav elements
const hamburger = document.querySelector('.hamburger-menu');
const nav = document.querySelector('nav');

// Attach click event to the button
hamburger.addEventListener('click', () => {
    // Toggle aria-expanded attribute and visible class
    const isExpanded = nav.getAttribute('aria-expanded') === 'true';
    nav.setAttribute('aria-expanded', !isExpanded);
    nav.classList.toggle('visible');
});
