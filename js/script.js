document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelectorAll(".icons");

  icons.forEach((icon) => {
    icon.addEventListener("mouseover", () => {
      const previous = icon.previousElementSibling;
      const next = icon.nextElementSibling;

      if (previous) {
        previous.classList.add("leftScale");
        if (previous.previousElementSibling) {
          previous.previousElementSibling.classList.add("farScale");
        }
      }

      icon.classList.add("mainScale");

      if (next) {
        next.classList.add("leftScale");
        if (next.nextElementSibling) {
          next.nextElementSibling.classList.add("farScale");
        }
      }
    });

    icon.addEventListener("mouseleave", () => {
      const previous = icon.previousElementSibling;
      const next = icon.nextElementSibling;

      if (previous) {
        previous.classList.remove("leftScale");
        if (previous.previousElementSibling) {
          previous.previousElementSibling.classList.remove("farScale");
        }
      }

      icon.classList.remove("mainScale");

      if (next) {
        next.classList.remove("leftScale");
        if (next.nextElementSibling) {
          next.nextElementSibling.classList.remove("farScale");
        }
      }
    });
  });
});
