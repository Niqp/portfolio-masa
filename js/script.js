const projects = document.querySelector(".projects");
const ANIMATION_TIME = 501;

let currentCollapsible = null;

const toggleProject = (ev) => {
  if (ev.target.classList.contains("project-wrapper")) {
    if (
      currentCollapsible &&
      currentCollapsible !== ev.target &&
      currentCollapsible.parentElement.classList.contains("active")
    ) {
      currentCollapsible.parentElement.classList.remove("active");
      const container =
        currentCollapsible.parentElement.querySelector(".project-summary");
      container.classList.toggle("hidden");
    }
    currentCollapsible = ev.target;
    ev.target.parentElement.classList.toggle("active");
    const container = ev.target.parentElement.querySelector(".project-summary");
    container.classList.toggle("hidden");
    if (ev.target.parentElement.classList.contains("active")) {
      setTimeout(() => ev.target.scrollIntoView(false), ANIMATION_TIME);
    }
  }
};

projects.addEventListener("click", toggleProject);
