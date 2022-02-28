function toggle() {
  let collapsible = document.getElementById("collapsible");
  collapsible.classList.toggle("collapsible--expanded");
}

const menuItems = document.querySelectorAll(".menu__link");

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", (e) => {
    menuItems.forEach((item) => item.classList.remove("active"));
    e.currentTarget.classList.add("active");
  });
});

function filterProjects(p) {
  const projects = document.querySelectorAll(".portfolio__items div");
  let filter = p.target.dataset.filter;
  if (filter === "*") {
    projects.forEach((project) => project.classList.remove("hidden"));
  } else {
    projects.forEach((project) => {
      project.classList.contains(filter)
        ? project.classList.remove("hidden")
        : project.classList.add("hidden");
    });
  }
}
