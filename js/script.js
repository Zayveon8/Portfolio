document.addEventListener("DOMContentLoaded", function() {
    var heading = document.getElementById("slide-heading");
    var windowWidth = window.innerWidth;
    var headingWidth = heading.offsetWidth;
  
    setTimeout(function() {
      var leftPosition = (windowWidth - headingWidth) / 2;
      heading.style.left = leftPosition + "px";
    }, 100);
  });


  function changeButtonColor() {
    var button = document.getElementById("impression-button");
    button.classList.add("clicked");
    button.innerHTML = "Thanks &lt;3";
  }


  var themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("change", function() {
    document.body.classList.toggle("dark-mode");
  });