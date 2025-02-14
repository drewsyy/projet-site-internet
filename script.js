function toggleMenus() {
  const menus= document.getElementById("menus");
  menus.style.display = (menus.style.display === "block") ?
  "none" : "block";
}

function closeMenus() {
  document.getElementById("menus").style.display = "none";
}
document.addEventListener("click", function(event) {
  const menus = document.getElementById("menus");
  const button = document.querySelector(".menus-button");
  if (!menus.contains(event.target) && !button.contains
  (event.target)) {
      menus.style.display = "none";
  }
});
