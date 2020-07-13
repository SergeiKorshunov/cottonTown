;let slideIndex = 1;
// showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}
function minusSlide() {
    showSlides(slideIndex -= 1);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let slides = document.querySelectorAll(".slider");
    let dots = document.querySelectorAll(".dots-item");
    let i;
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    // for (i = 0; i < slides.length; i++) {
    //     slides[i].style.display = "none";
    // }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.add('opacity0');
        // console.log(slides[slideIndex]);
    }
    // slides.forEach(item => {
    //     item.style.opacity = "0"
    // })
    // slides.forEach(item => {
    //     item.classList.add('opacity0')
    // })
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dots-item", "");
    };
    slides[slideIndex - 1].classList.remove('opacity0');
    dots[slideIndex - 1].className += " active-dots-item";
    
    
};

document.querySelector('.btn-slider-left').addEventListener('click',function(){
    minusSlide();
})
document.querySelector('.btn-slider-right').addEventListener('click',function(){
    plusSlide();
})
document.querySelector('[dots-index="0"]').addEventListener('click', function(){
    currentSlide(1);
})
document.querySelector('[dots-index="1"]').addEventListener('click', function(){
    currentSlide(2);
})
document.querySelector('[dots-index="2"]').addEventListener('click', function(){
    currentSlide(3);
})
document.querySelector('[dots-index="3"]').addEventListener('click', function(){
    currentSlide(4);
})
setInterval(() => {
    showSlides(slideIndex += 1);
}, 2500);