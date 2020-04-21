



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    $(".nav .nav-item .active").removeClass("active");
    var el = $(this).attr("data-id");
    $("[data-id='" + el + "'").addClass("active");
    //$(this).addClass("active");

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});