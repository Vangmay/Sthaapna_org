parallax = document.getElementById("parallax")

window.addEventListener("scroll",function(){
    let offset = window.scrollY*0.5;
    parallax.style.backgroundPositionY=offset+"px";
})