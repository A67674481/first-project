// Animation du menu de navigation
document.addEventListener("DOMContentLoaded", () => {
  // Gestion du défilement fluide
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute("href"));
      section.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Animation de la barre de navigation au défilement
  let lastScroll = 0;
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      header.classList.remove("scroll-up");
      return;
    }

    if (
      currentScroll > lastScroll &&
      !header.classList.contains("scroll-down")
    ) {
      header.classList.remove("scroll-up");
      header.classList.add("scroll-down");
    } else if (
      currentScroll < lastScroll &&
      header.classList.contains("scroll-down")
    ) {
      header.classList.remove("scroll-down");
      header.classList.add("scroll-up");
    }
    lastScroll = currentScroll;
  });

  // Gestion du formulaire de contact
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // Ici, vous pouvez ajouter la logique d'envoi du formulaire
      alert("Message envoyé ! (Simulation)");
      contactForm.reset();
    });
  }
});
