//validating form
const $ = selector => document.querySelector(selector); 

const validate = () => {
    const email = $("#email");
    const fname = $("#fname");
    const lname = $("#lname");
    const yes = $("#yes");
    const no = $("#no");

   
    let isValid = true;
    if (fname.value == "") {
        fname.nextElementSibling.textContent =
        "This field is required.";
        isValid = false; 
    } else { 
        fname.nextElementSibling.textContent = "";
    }    
    if (lname.value == "") {
        lname.nextElementSibling.textContent =
        "This field is required.";
        isValid = false; 
        } else { 
        lname.nextElementSibling.textContent = "";
    }
    if (email.value == "") {
        email.nextElementSibling.textContent =
        "This field is required.";
        isValid = false; 
    } else {
        email.nextElementSibling.textContent = ""; 
    }
    if (yes.checked == false && no.checked == false)  {
        no.nextElementSibling.textContent =
            "This box must be checked.";
        isValid = false; 
    } else { 
        no.nextElementSibling.textContent = "";
    }
    if (isValid == true) {
        $("form").submit(); 
}};

document.addEventListener("DOMContentLoaded", () => {
    $("#submit").addEventListener("click", validate);  
});

//hamburger navbar
function header() {
    document
      .querySelector(".mobheader .hamburgeroptions")
      .classList.toggle("displayoptions");
  }
