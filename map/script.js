const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector(".mobile-nav");

hamburger.addEventListener('click',function (){
    this.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active');
})

const projection = d3.geoMercator();
const path = d3.geoPath(projection)

const svg = d3.select(".svg-container").append('svg').attr('width',900).attr('height',600);

const g = svg.append('.hero-container')
d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
    .then(data=>{
        const countries = topojson.feature(data,data.objects.countries);
        g.selectAll('path').data(countries.features).enter().append('path').attr('class','country').attr(d,path)
    })