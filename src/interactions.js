const globeIcon = document.querySelector(".globe-icon");
globeIcon.addEventListener("click", ({ target }) => {
  if (!target.matches("path")) return;
  target.setAttribute("stroke", "purple");
});
