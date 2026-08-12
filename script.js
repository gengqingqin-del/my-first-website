const learnMoreButton = document.querySelector("#learnMoreBtn");
const aboutSection = document.querySelector("#about");

if (learnMoreButton && aboutSection) {
  learnMoreButton.addEventListener("click", () => {
    aboutSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}
