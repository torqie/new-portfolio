$(document).ready(function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        alignToTop: false,
        behavior: 'smooth'
      });
    });
  });


  const pages = $(".page");
  pages.waypoint(function(direction) {
    if(direction === "down") {
      $(".nav .nav-item .active").removeClass("active");
      $("[data-id='" + this.element.id + "'").addClass("active");
    }
  }, { offset: "30%"});

  pages.waypoint(function(direction) {
    if(direction === "up") {
      $(".nav .nav-item .active").removeClass("active");
      $("[data-id='" + this.element.id + "'").addClass("active");
    }
  }, { offset: "-50%"});
});

// .parent().prev().children("a")

