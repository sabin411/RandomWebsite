$(document).ready(function () {
  var navigation = $(".navigation-header");
  navigation.clone().appendTo("header").addClass("slide-header");

  $(document).scroll(function () {
    var scrollVal = $(this).scrollTop();
    if (scrollVal >= 150) {
      $(".slide-header").addClass("slide-down");
    } else {
      $(".slide-header").removeClass("slide-down");
    }
  });
  $(".header-texts h1").css("transform", "scale(1)");
  setTimeout(() => {
    $(".header-texts p").css("transform", "scale(1)");
  }, 200);

  $(".menu").click(function () {
    $(".nav-links").toggleClass("active-nav");
  });

  var allLinks = $(".nav-links").children();

  // light box

  $(".image").click(function () {
    var imgSource = $(this).find("img").attr("src");
    var imgCaption = $(this).find("img").attr("alt");

    // $("light-box").find(".caption").text(imgCaption);

    $(".light-box").addClass("fadeInLightBox");
    $(".light-box").find("img").attr("src", imgSource);
    console.log(imgSource);
  });
  $(".light-box").click(function (e) {
    // $(this).find("img").attr("src", "");
    $(this).removeClass("fadeInLightBox");
  });
});

const navLinks = document.querySelectorAll(".nav-links li");
const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  navLinks.forEach((links, index) => {
    if (links.style.animation) {
      links.style.animation = "";
    } else {
      links.style.animation = `navLinkFade 0.5s ease forwards ${index / 5}s`;
    }
  });
  menu.classList.toggle("toggle");
});
