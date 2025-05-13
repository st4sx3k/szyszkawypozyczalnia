document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.querySelector(".nav-toggle");
    const navCenter = document.querySelector(".nav-center");

    toggle.addEventListener("click", () => {
      navCenter.classList.toggle("show");
    });
  });