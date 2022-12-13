const nav = document.querySelectorAll('.nav__item'),
      navWrap = document.querySelector('.nav'),
      hamburger = document.querySelector('.hamburger'),
      divider = document.querySelectorAll('.active_divider'),
      slides = document.querySelectorAll('.slider-block'),
      prev = document.querySelector('.angle__prev'),
      next = document.querySelector('.angle__next'),
      masc = document.querySelector('.masc');

function hover(nav) {
    nav.forEach((item, i) => {
        item.addEventListener('mouseenter', (e) => {   
            console.log(e.target);
            if(item == e.target) {
                divider[i].classList.add('divider-show');
                divider[i].classList.remove('divider-hide');
            }
        });
        item.addEventListener('mouseleave', () =>{
            divider[i].classList.remove('divider-show');
            divider[i].classList.add('divider-hide');
        });
        
    });
}
hover(nav);

let slideIndex = 0;

showSlide(slideIndex);

function showSlide(n) {
    next.addEventListener('click', () => {
        slides.forEach(item => {
            item.classList.add('hide');
        });
        n++;
        if(n <= 2) {
            slides[n].classList.remove('hide');
        } else {
            n = 0; 
            slides[n].classList.remove('hide');  
        }
    });

    prev.addEventListener('click', () => {
        slides.forEach(item => {
            item.classList.add('hide');
        });
        n--;
        if(n >= 0) {
            slides[n].classList.remove('hide');
        } else {
            n = 2; 
            slides[n].classList.remove('hide');  
        }
    });
}

function showHumburger () {
    hamburger.addEventListener('click', () => {
        navWrap.classList.toggle('nav__active');
        hamburger.classList.toggle('hamburger__active');
        masc.classList.toggle('masc_active');
    });
}
showHumburger();