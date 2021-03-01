$(document).ready(function(){

    $('.customer__slider').slick({
    
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
//        autoplay: true,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        autoplaySpeed: 1000,
        draggable: true,
        responsive: [
        {
        
            breakpoint: 991,
            settings: {
            
                slidesToShow: 2
                
            }
        },{
            breakpoint: 640,
            settings: {
            
                slidesToShow: 1
            }
        }
        ] 
    });
});