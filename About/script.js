const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector(".mobile-nav");
const photo = document.querySelector(".photo");

hamburger.addEventListener('click',function (){
    this.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active');
})
window.addEventListener('scroll',function(){
    let offset = window.scrollY; 
    photo.style.backgroundPositionX = offset * 1.5 + "px"
})
