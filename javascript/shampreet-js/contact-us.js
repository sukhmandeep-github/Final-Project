//validating form
const $ = selector => document.querySelector(selector); 

const validate = () => {
    const email = $("#email");
    const fname = $("#fname");
    const lname = $("#lname");
    
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


function header() {
    document
      .querySelector(".mobheader .hamburgeroptions")
      .classList.toggle("displayoptions");
  }

function search(){

    let p = document.getElementById('place');
    let p2 = document.getElementById('place2');

    if(p.value == 'toronto' || p.value == 'Toronto'){

        window.location.href='../../html/Fahad/Home.html';
        
    }
    else if (p.value == 'montreal' || p.value == 'Montreal' ){

        window.location.href='../../html/Deepanker/montreal.html';
    }

    else if (p.value == 'vancouver' || p.value == 'Vancouver'){

        window.location.href = '../../html/Sukhman/vancouver.html';
    }
    else if(p2.value == 'toronto' || p2.value == 'Toronto'){

        window.location.href='../../html/Fahad/Home.html';
        
    }
    else if (p2.value == 'montreal' || p2.value == 'Montreal' ){

        window.location.href='../../html/Deepanker/montreal.html';
    }

    else if (p2.value == 'vancouver' || p2.value == 'Vancouver'){

        window.location.href = '../../html/Sukhman/vancouver.html';
    }

};
