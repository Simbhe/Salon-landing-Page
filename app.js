//making nav appear
let menu = document.querySelector('#menu_bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
//adding active scrolling 
//let section = document.querySelectorAll('section');
//let navLinks = document.querySelectorAll('header .navbar a');


//search form
window.onscroll = () => {
    
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
   
    // following code does not work to make the active of the nav bar coresspond to where you are on the page
    /*ection.forEach(sec =>{              
       
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');
        
        if(top => offset && top < offset + height){
            navLinks.forEach(links =>{
                             links.classList.remove('active');
                              document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
                             });
        };
        
    });*/
    
}

//form to appear when clicking search icon
document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

//closing functinality for x icon
document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

// homepage slider

var swiper = new Swiper(".home-slider", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 7500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        loop:true,
      });

//reviews slider

var swiper = new Swiper(".review-slider", {
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
          delay: 7500,
          disableOnInteraction: false,
        },
        loop:true,
    breakpoints:{
        0: {
            slidesPerview: 1,
        },
        640: {
            slidesPerview: 2,
        },
        768: {
            slidesPerview: 2,
        },
        1024: {
            slidesPerview: 3,
        },
     },
});