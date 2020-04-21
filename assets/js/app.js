window.__forceSmoothScrollPolyfill__ = true;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    $(".nav .nav-item .active").removeClass("active");
    $(this).addClass("active");

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});