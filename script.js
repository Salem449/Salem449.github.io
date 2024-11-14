// JavaScript to toggle navbar visibility
function toggleNavbar() {
    var navbar = document.getElementById("navbar");
    if (navbar.style.display === "none" || navbar.style.display === "") {
      navbar.style.display = "block";
    } else {
      navbar.style.display = "none";
    }
  }
  
  // Close navbar if clicking outside of it
document.addEventListener("click", function(event) {
    const navbar = document.getElementById("navbar");
    const menuButton = document.querySelector(".menu-button");
  
    // Check if the click is outside the navbar and menu button
    if (navbar.style.display === "block" && !navbar.contains(event.target) && !menuButton.contains(event.target)) {
      navbar.style.display = "none";
    }
  });