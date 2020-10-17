const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('nav');
const spans = hamburger.querySelectorAll('span');
const navButtons = navigation.querySelectorAll('a');

console.log(navButtons);

hamburger.addEventListener('click', ()=>{
    navigation.classList.toggle('active');
    for (let span of spans){
        span.classList.toggle('active');
    }
});

for( let navButton of navButtons){
 navButton.addEventListener('click', ()=>{
    navigation.classList.toggle('active');
    for (let span of spans){
        span.classList.toggle('active');
    }
 });
}