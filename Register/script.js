const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector(".mobile-nav");
const submit = document.querySelector(".submit")
const content  = document.querySelector('.content')

hamburger.addEventListener('click',function (){
    this.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active');
})

submit.addEventListener('click',function(){
    content.innerHTML = "<h1 class='end-message'>Thanks for you submission, you will hear from us soon.</h1>"
})

