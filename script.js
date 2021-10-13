const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector(".mobile-nav");


hamburger.addEventListener('click',function (){
    this.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active');
});


window.addEventListener("scroll",function(){
    let offset = window.scrollY*+1.5;
    let text_offset = window.scrollY*-1.8;
    text.style.backgroundPositionY = offset+"px"
    text_h2.style.top=text_offset+"px"
})


