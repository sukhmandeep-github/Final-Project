function signupvalidation() {
  document.querySelector(".emailheading").innerHTML =
    "<h2>Sign Up for Newsletters</h2>";
  let fname = document.forms["emailsignup"]["firstname"].value;
  let lname = document.forms["emailsignup"]["lastname"].value;
  let email = document.forms["emailsignup"]["email"].value;

  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (fname == "" || email == "" || !email.match(validRegex)) {
    if (fname == "" || email == "") {
      document.querySelector(".emailheading").innerHTML +=
        "<p>First Name or email can't be empty</p>";
    }

    if (!email.match(validRegex)) {
      document.querySelector(".emailheading").innerHTML +=
        "<p>Invalid Email</p>";
    }
  } else {
    document.querySelector(".emailheading").innerHTML +=
      "<p>You have successfully signed up </p>";
    document.querySelector(".emailheading p").style["color"] = "green";
  }

  document.forms["emailsignup"]["firstname"].value = "";
  document.forms["emailsignup"]["lastname"].value = "";
  document.forms["emailsignup"]["email"].value = "";
}

function header() {
  document
    .querySelector(".mobheader .hamburgeroptions")
    .classList.toggle("displayoptions");
}
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

var j = 0;
var txt = "bienvenue à montréal";
var speed = 50;

function typeWriter() {
  if (j < txt.length) {
    document.getElementById("autotypetext").innerHTML += txt.charAt(j);
    j++;
    setTimeout(typeWriter, speed);
  }
}
