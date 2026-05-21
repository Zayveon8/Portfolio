
document.addEventListener("DOMContentLoaded", function() {
  var themeToggle = document.getElementById("theme-toggle");

  if (themeToggle) {
    var savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      themeToggle.checked = true;
    }

    themeToggle.addEventListener("change", function() {
      if (themeToggle.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("portfolio-theme", "dark");
      } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("portfolio-theme", "light");
      }
    });
  }
});

function changeButtonColor() {
  var button = document.getElementById("impression-button");
  if (button) {
    button.classList.toggle("clicked");
  }
}
