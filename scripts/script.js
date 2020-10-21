const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('nav');
const spans = hamburger.querySelectorAll('span');
const navButtons = navigation.querySelectorAll('a');
const priceListButton = document.getElementById('priceListButton');
const priceListSection = document.querySelector('.priceListSection');
const closeButton = document.querySelector('.closeButton');
const services = document.querySelectorAll('.service');
const servicesButtons = document.querySelectorAll('.serviceButton');
const content = document.querySelectorAll('content');
const contentText = document.querySelectorAll('.contentText');

console.log(contentText);
console.log(servicesButtons);

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

for (let i = 0; i < services.length; i++){
    servicesButtons[i].addEventListener('click', ()=>{
        services[i + 1].classList.toggle('active');
        contentText[i].classList.toggle('active');
    });
}
