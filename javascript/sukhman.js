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



  // --form validation page 2 --

  
  function validate() {
    let $ = (selector) => document.querySelector(selector);
    //alert("runing");
    let name = $('#name');
    let email = $('#email');
    
    let namepattern = /^[a-zA-Z]+$/;
    let emailpattern = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

  
    if (name.value == '') {
      name.nextElementSibling.innerHTML = 'NAME cannot be empty';
    } else if (!namepattern.test(name.value)) {
      //alert("runing2");
      name.nextElementSibling.innerHTML = ' INVALID NAME !! Please enter your name again ';
      
    } 
  
  
    if (email.value == '') {
      //alert("runing3");
      email.nextElementSibling.innerHTML = 'EMAIL cannot be empty';
    } else if (!emailpattern.test(email.value)) {
      email.nextElementSibling.innerHTML = 'Please enter valid  email ';
    }  
  }






  // page 3 thing to do 

  window.addEventListener('load',onload) 
  function onload ()  {
  let nextSlide = $('#slides img:first-child');

  // start slide show
  setInterval(() => {
    $('#slide').fadeOut(1000, () => {
      if (nextSlide.next().length == 0) {
        nextSlide = $('#slides img:first-child');
      } else {
        nextSlide = nextSlide.next();
      }
      const nextSlideSource = nextSlide.attr('src');
      $('#slide').attr('src', nextSlideSource).fadeIn(1000); 
    }); // end fadeOut()
  }, 3000); // end setInterval()


  // second imagebox
  let nextSlide2 = $('#slides2 img:first-child');

  // start slide show
  setInterval(() => {
    $('#slide2').fadeOut(1000, () => {
      if (nextSlide2.next().length == 0) {
        nextSlide2 = $('#slides2 img:first-child');
      } else {
        nextSlide2 = nextSlide2.next();
      }
      const nextSlideSource = nextSlide2.attr('src');
      $('#slide2').attr('src', nextSlideSource).fadeIn(1000); 
    }); // end fadeOut()
  }, 5000); // end setInterval()


  let nextSlide3 = $('#slides3 img:first-child');

  // start slide show
  setInterval(() => {
    $('#slide3').fadeOut(1000, () => {
      if (nextSlide3.next().length == 0) {
        nextSlide3 = $('#slides3 img:first-child');
      } else {
        nextSlide3 = nextSlide3.next();
      }
      const nextSlideSource = nextSlide3.attr('src');
      $('#slide3').attr('src', nextSlideSource).fadeIn(1000); 
    }); // end fadeOut()
  }, 4000); // end setInterval()

  let nextSlide4 = $('#slides4 img:first-child');

  // start slide show
  setInterval(() => {
    $('#slide4').fadeOut(1000, () => {
      if (nextSlide4.next().length == 0) {
        nextSlide4 = $('#slides4 img:first-child');
      } else {
        nextSlide4 = nextSlide4.next();
      }
      const nextSlideSource = nextSlide4.attr('src');
      $('#slide4').attr('src', nextSlideSource).fadeIn(1000); 
    }); // end fadeOut()
  }, 3000); // end setInterval()


  //slideshow 5 
  let nextSlide5 = $('#slides5 img:first-child');

  // start slide show
  setInterval(() => {
    $('#slide5').fadeOut(1000, () => {
      if (nextSlide5.next().length == 0) {
        nextSlide5 = $('#slides5 img:first-child');
      } else {
        nextSlide5 = nextSlide5.next();
      }
      const nextSlideSource = nextSlide5.attr('src');
      $('#slide5').attr('src', nextSlideSource).fadeIn(1000); 
    }); // end fadeOut()
  }, 5000); // end setInterval()


}
  