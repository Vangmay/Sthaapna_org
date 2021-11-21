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
    'Sharmishtha Singh Ranawat',
    'Tanisha Acharya',
    'Moaz Bin Asad',
    'Raju Kumar',
]
var testimony = [
    `I am Sharmishtha Singh Ranawat, a third year student of St. Stephen's College, Delhi. I am deeply fond of Indian philosophy, culture and civilizational history. My experience at Sthaapna’s Research conclave was enthralling. The theme of the conclave was unique and very relevant in the current times. It is also an unexplored chapter of India's glorious history which does not find a place in our syllabi. While researching for the conclave, I learnt about some very interesting bits of India's trade and cultural exchanges as well as our historical soft power. There is a lot we can learn from history and work on reviving our past glory to make our lives better. The papers presented by all participants were deeply insightful and were a learning experience. I congratulate Sthaapna for their wonderful initiative which will go a long way in Bharat's larger journey of Atmanirbharta.`
    ,
    
    `"A brave, frank, clean-hearted, courageous and aspiring youth is the only foundation on which the future nation can be built"  These words of Swami Vivekananda are being brought into action by Sthaapna. 
    Being a part of the Research Conclave organized by Sthaapna has been an experience which is one of a kind. For an aspiring young student like me this has been an enlightening session and has ignited in us the spirit to contribute actively in the resurgence of the rich cultural heritage of India. The deliberation over the need of reviving the lost Indian businesses has paved the way for us, to bring in innovative methods and renew the entrepreneurship skills for the betterment of the society. 
    As a budding blogger and an enthusiastic debater this has been a wonderful opportunity for me  to learn and express new ideas. It has dawned upon me a new way of thinking and analyzing issues of importance. It has been a privilege to be a part of this event. 
    `
    ,
    
    `
    Hi, I'm Moaz bin Asad from Ranchi, Jharkhand.
    This was the first time when I participated in any Research Conclave. When I went through the topic, "The Lost Indian Businesses", I thought for a quit, nothing was in my mind, neither any idea nor any opinion. But the first time when the topic discussion meeting was conducted, my mind opened up like a fragrance in the air , thousands of thoughts and views, many ideas to show, lots of suggestions on how to take back the lost glory of the golden bird.
           At last,I would like to thank "Team Sthaapna" for giving me this chance to participate, to read about the history, to know about different ideas, get aware about different lost businesses in different parts of the nation. Actually this conclave strikes directly to the revolutionary thoughts, creates a bit of fire to a dead heart, enlightens a way towards the spirit of True Nationalism..
    Thank You for giving me this platform and best wishes for the future!`
    ,
    
    `
    Many a time, problems exist simply because we have inherently drifted away from the solutions in search of something meaningless. 
    In India thousands such problems exist and the decline of Indigenous business establishments is one of the reasons for that. 
    The conclave "Resuscitating The Lost Indian Businesses" had everything that one can expect for. 
    It brought together some really bright young minds. It gave us an opportunity to put forth our ideas and learn from each other. 
    This conclave can be a milestone for the future of entrepreneurship and cultural rejuvenation in India.
    `
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