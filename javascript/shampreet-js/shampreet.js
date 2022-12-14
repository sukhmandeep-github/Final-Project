let slideIndex=1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex+=n);
}

function currentSlide(n){
    showSlides(slideIndex=n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if(n>slides.length){slideIndex=1}
    if(n<1){slideIndex = slides.length}
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    slides[slideIndex-1].style.display="block";  
}

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

