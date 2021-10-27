const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector(".mobile-nav");
const text = document.querySelector('.text');
const hero = document.querySelector('.hero')

hamburger.addEventListener('click',function (){
    this.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active');
})

window.addEventListener('scroll',function (){
    let offset = window.scrollY
    text.style.top = offset * -0.3 + "px"
    hero.style.backgroundPositionY = offset * +0.3 + "px"
})

