$(document).ready(function() {
  $('[data-toggle="popover"]').popover({
    trigger: "hover"
  });


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



  var currentInt= 1;
  function displayNewRole() {
    var roles = ["Full-Stack Developer", "UI/UX Designer", "Part Time Photographer"];

    if(currentInt === roles.length) {
      currentInt = 0;
    }

    console.log("Role: ", roles[currentInt]);
    $("#i-am-role").text(roles[currentInt]);
    currentInt++;
  }

  setInterval(displayNewRole, 2000);


});



