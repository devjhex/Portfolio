export function initNav() {
  const button = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");
  const closeButton = document.getElementById("close-menu-btn");

  button.addEventListener("click", () => {
      menu.classList.toggle("hidden");

      const expanded = button.getAttribute("aria-expanded") === "true";

      button.setAttribute("aria-expanded", !expanded)

      button.classList.toggle("hidden");
  });


  closeButton.addEventListener("click", () => {
      menu.classList.add("hidden");

      button.setAttribute("aria-expanded", "false");

      button.classList.toggle("hidden");
  });

  //lets make the burger dissapear when the user clicks on it because the the list will be shown and the user can click on the list to navigate to the different sections of the website

}