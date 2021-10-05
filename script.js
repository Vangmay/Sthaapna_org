parallax = document.getElementById("parallax")
div1 = document.getElementById("Div1")

window.addEventListener("scroll",function(){
    let offset = window.scrollY*0.5;
    let text_offset = window.scrollY*-0.8;
    parallax.style.backgroundPositionY=offset+"px";   
    div1.style.top=text_offset+"px";   
})
