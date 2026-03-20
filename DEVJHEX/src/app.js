import { initNav } from "./nav.js"
import { initModal } from "./modal.js"
import { initProjects } from "./projects.js";

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initModal();
  initProjects();
});