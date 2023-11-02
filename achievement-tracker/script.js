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

const hamburger = document.querySelector('.hamburger-menu');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    const isExpanded = nav.getAttribute('aria-expanded') === 'true';
    nav.setAttribute('aria-expanded', !isExpanded);
    nav.classList.toggle('visible');
});

// adding titles to tags
let tags = document.querySelectorAll('.tag-list .tag');

tags.forEach(tag => {
  let dataTag = tag.getAttribute('data-tag');
  let textContent = tag.textContent.trim();

  switch(dataTag) {
    case 'version':
      let versionNumber = textContent.replace('V', '');
      tag.setAttribute('title', `Version ${versionNumber}`);
      break;
    case 'krystal':
      let krystalNumber = textContent.replace('Krystal', '').trim();
      tag.setAttribute('title', `${krystalNumber} krystals`);
      break;
    case 'type':
      if(tag.hasAttribute('data-tag-hidden')) {
        tag.setAttribute('title', 'This is a secret achievement');
      }
      break;
  }
});