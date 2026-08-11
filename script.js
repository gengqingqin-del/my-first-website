const learnMoreButton = document.querySelector("#learnMoreBtn");
const aboutSection = document.querySelector("#about");

learnMoreButton.addEventListener("click", () => {
  aboutSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
