$("#toggleButton").click(function(){
  if(!($("nav").hasClass("scrolled"))){
    $("nav").toggleClass("green-shade");
  }
});

$(".close-navbar-toggler").click(function(){
  if(!($("nav").hasClass("scrolled"))){
    $("nav").toggleClass("green-shade");
  }
});

$(function() {
  $(document).scroll(function(){
    $("#navLinks").collapse('hide');
    var $nav = $("#mainNavbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    $nav.toggleClass("green-shade", $(this).scrollTop() > $nav.height());
  })
})

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

window.addEventListener("scroll", reveal);