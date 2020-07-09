var navSlide = function () {
    let burger = document.querySelector(".burger");
    let nav = document.querySelector(".nav-links");
    let navLinks = document.querySelectorAll(".nav-links li");
  
    burger.addEventListener("click", function () {
        nav.classList.toggle("nav-active");             // trnaslating the navbar 

        navLinks.forEach((links,index) => {             // delaying and animating the links
            if(links.style.animation){
                links.style.animation = '';
            }
            else{
                links.style.animation = `navLinkFade 0.5s ease forwards ${index / 6 + 0.4}s`;
            }
        })

        burger.classList.toggle('toggle');
        
    });



    
  };
  navSlide();