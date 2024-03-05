const cl = cloudinary.Cloudinary.new({ cloud_name: "tomasgo" });
cl.responsive();

$(document).ready(function() {
  $("img").lazyload({
    threshold: 200,
    effect: "fadeIn"
  });
});

//slow scroll to top of page

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $(".top").fadeIn();
    } else {
      $(".top").fadeOut();
    }
  });
  $(".top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});

//slow scroll to top of page --end


function toggleAccordion() {
  var accordionContent = document.getElementById("accordionContent");
  accordionContent.classList.toggle("show");
}