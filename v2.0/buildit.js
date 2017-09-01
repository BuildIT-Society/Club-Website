// File contains all javascript used across club site

// slides text up upon page loading
$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});

// fades in header text when page loads
$(document).ready(function() {
        $(".txt-head").fadeIn(2000);
        $(".txt-head-sub").fadeIn(2000);
});

// fades in and fades out navbar if scollTop passes 50px
$(window).scroll(
    {
        previousTop: 0
    },
    function () {
    var currentTop = $(window).scrollTop();
    /*if (currentTop < this.previousTop && $(this).scrollTop() < 100) */
    if (currentTop < 50) {
        $(".navbar").fadeIn(300);
    } else {
        $(".navbar").fadeOut(300);
    }
    this.previousTop = currentTop;
});

// Add smooth scrolling to all links by having href="#name" and location id="name"
$(document).ready(function(){
  $(".bg-more a").on('click', function(event) {
  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();
    var hash = this.hash;
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    }
  });
});
