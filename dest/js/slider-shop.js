$(document).ready(function(){
    $('.recently-slide').slick({
        arrows: true,
        dots:true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 800,
        easing: 'linear',
        infinite: true,
        initialSlide: 0,
        autoplay:true,
        autoplaySpeed:1500,
        pauseOnFocus: true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        draggable:true,
        swipe:true,
        swipeThreshold:7,
        touchmove:true,
        waitForAnimate:false,
        centerMode:false
    });
})