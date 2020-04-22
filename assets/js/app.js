
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    //$(".nav .nav-item .active").removeClass("active");
    const el = $(this).attr("data-id");
    //$("[data-id='" + el + "'").addClass("active");

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


const pages = $(".page");

pages.waypoint(function(direction) {
  if(direction === "down") {
    console.log(this.element.id + ' ' + direction);
    console.log('Trigger point: ' + this.triggerPoint)
    $(".nav .nav-item .active").removeClass("active");
    $("[data-id='" + this.element.id + "'").addClass("active");
  }
}, { offset: "50%"});

pages.waypoint(function(direction) {
  if(direction === "up") {
    console.log(this.element.id + ' ' + direction);
    console.log('Trigger point: ' + this.triggerPoint)
    $(".nav .nav-item .active").removeClass("active");
    $("[data-id='" + this.element.id + "'").parent().prev().children("a").addClass("active");
  }
}, { offset: "50%"});
