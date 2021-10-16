const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector(".mobile-nav");
const icon = document.querySelector(".menu-items")
const text = document.querySelector("#text")

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

icon.addEventListener("hover",function(){
    text.classlist.toggle('.text-active')
})

