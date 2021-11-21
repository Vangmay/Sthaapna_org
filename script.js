const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector(".mobile-nav");
const text = document.querySelector('.text');
const video = document.querySelector('.video');
const div3 = document.querySelector('.div3');
const div2P = document.querySelector('.div2P');
hamburger.addEventListener('click',function (){
    this.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active');
});

window.addEventListener('scroll',function(){
    let offset = window.scrollY; 
    text.style.top = offset * -0.4 + "px"
    video.style.left = offset * -1.2 + "px"
    div3.style.backgroundPositionY = offset * -0.05 + "px"
})    

var count = 3
var names = [
    'name1',
    'name2',
    'name3',
    'name4',
    'name5',
]
var testimony = [
    'testimony1',
    'testimony2',
    'testimony3',
    'testimony4',
    'testimony5'
]
var name_container = document.querySelector('.Name')
var testimony_container = document.querySelector('.Testimony')

var counter = 0 
setInterval(function(){
    if (counter >= names.length) {
        counter = 0
    }
    name_container.innerHTML = names[counter]
    testimony_container.innerHTML = testimony[counter]
    counter = counter + 1;
    console.log(names.length)
},3000)