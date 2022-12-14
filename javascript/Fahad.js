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

let myImagesArray = [
  '../../media/Fahad/Images/casa loma/download (1).jpg',
  '../../media/Fahad/images/casa loma/116752080-toronto-sep-29-interior-view-of-the-famous-casa-loma-on-sep-29-2018-at-toronto-canada.jpg2L.webp',
  '../../media/Fahad/images/casa loma/download.jpg',
];

// -----------------------------------------------------------
// Section 2 -  Build the slide of images --------------------
let lowerLimit = 0;
let upperLimit = myImagesArray.length - 1;

//setInterval('changeImage(-1)',1000)
function changeImage(direction) {
  lowerLimit = lowerLimit + direction;
  if (lowerLimit > upperLimit) {
    lowerLimit = 0;
  }
  if (lowerLimit < 0) {
    lowerLimit = upperLimit;
  }
  document.getElementById('slideshow').src = myImagesArray[lowerLimit];
}




