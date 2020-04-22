
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    $(".nav .nav-item .active").removeClass("active");
    var el = $(this).attr("data-id");
    $("[data-id='" + el + "'").addClass("active");

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// var pages = $(".page");
//
// pages.waypoint(function(direction) {
//   if(direction === "down") {
//     console.log(this.element.id + ' ' + direction);
//     $(".nav .nav-item .active").removeClass("active");
//     $("[data-id='" + this.element.id + "'").addClass("active");
//   }
// });
//
// pages.waypoint(function(direction) {
//   if(direction === "up") {
//     console.log(this.element.id + ' ' + direction);
//     $(".nav .nav-item .active").removeClass("active");
//     $("[data-id='" + this.element.id + "'").addClass("active");
//   }
// });

// var waypoints = $(".page").waypoint(function(direction) {
//   console.log(this.element.id + ' ' + direction);
//   $(".nav .nav-item .active").removeClass("active");
//   $("[data-id='" + this.element.id + "'").addClass("active");
// });
