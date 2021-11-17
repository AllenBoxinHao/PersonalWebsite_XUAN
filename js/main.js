function toggle() {
  let collapsible = document.getElementById("collapsible");
  collapsible.classList.toggle("collapsible--expanded");
}

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

const btns = document.querySelectorAll(".menu__link");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
