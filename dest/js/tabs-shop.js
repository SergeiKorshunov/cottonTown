// let some = document.querySelector(".something");
// if (some) {
//     some.addEventListener("click", dosomething, true);
// }


;let tabArr = document.querySelectorAll('.material__header-tab').forEach(tab =>{
    tab.addEventListener('click', function(e){
        e.preventDefault();
        let tabName = this.getAttribute('data-tab');
        let tab = document.querySelector('.material__content[data-tab="'+ tabName + '"]');

        document.querySelector('.material__header-tab.active-head').classList.remove('active-head');
        this.classList.add('active-head');

        document.querySelector('.material__content.active-tab').classList.remove('active-tab');
        tab.classList.add('active-tab');
        
    })
});

/* Индекс слайда по умолчанию */
let slideIndex2 = 1;
let slides2 = document.querySelectorAll(".active-tab .material__content-slide-item");
let dots2 = document.querySelectorAll(".active-tab  .m-dotted__item");
    // console.log(slides);
    // console.log(dots);
    
// showSlidesTabs(slideIndex2);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlideTab() {
    showSlidesTabs(slideIndex2 += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlideTab() {
    showSlidesTabs(slideIndex2 -= 1);
}

/* Устанавливает текущий слайд */
function currentSlideTab(n) {
    showSlidesTabs(slideIndex2 = n);
}

/* Основная функция слайдера */
function showSlidesTabs(n) {
    let i;
    if (n > slides2.length) {
        slideIndex2 = 1
    }
    if (n < 1) {
        slideIndex2 = slides2.length
    }
    for (i = 0; i < slides2.length; i++) {
        slides2[i].classList.add('opacity0');
    }
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active-dotted__item", "");
    }
    slides2[slideIndex2 -1].classList.remove('opacity0');
    dots2[slideIndex2 -1].className += " active-dotted__item";
};
document.querySelector('[dots-num="0"]').addEventListener('click', function () {
    currentSlideTab(1);
})
document.querySelector('[dots-num="1"]').addEventListener('click', function () {
    currentSlideTab(2);
});
document.querySelector('[dots-num="2"]').addEventListener('click', function () {
    currentSlideTab(3);
});
document.querySelector('[dots-num="3"]').addEventListener('click', function () {
    currentSlideTab(4);
});

setInterval(() => {
    showSlidesTabs(slideIndex2 +=1)
}, 1000);