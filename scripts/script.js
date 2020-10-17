const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('nav');
const spans = hamburger.querySelectorAll('span');

console.log(navigation);
console.log(spans);

hamburger.addEventListener('click', ()=>{
    navigation.classList.toggle('active');
    for (let span of spans){
        span.classList.toggle('active');
    }
});