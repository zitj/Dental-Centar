const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('nav');
const spans = hamburger.querySelectorAll('span');
const navButtons = navigation.querySelectorAll('a');
const priceListButton = document.getElementById('priceListButton');
const priceListSection = document.querySelector('.priceListSection');
const closeButton = document.querySelector('.closeButton');

console.log(closeButton);

hamburger.addEventListener('click', ()=>{
    navigation.classList.toggle('active');
    for (let span of spans){
        span.classList.toggle('active');
    }
    if(!priceListSection.classList.contains('hide')){
        priceListSection.classList.add('hide');
        navigation.classList.remove('active');
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

priceListButton.addEventListener('click', ()=>{
    navigation.classList.remove('active');
    priceListSection.classList.remove('hide');
    for (let span of spans){
        span.classList.add('active');
    }
});

closeButton.addEventListener('click', ()=>{
    priceListSection.classList.add('hide')
});
