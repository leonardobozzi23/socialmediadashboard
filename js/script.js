let darkButton = document.querySelector('.button-switcher');
let darkButtonAnimation = document.querySelector('.switch');
let cardTop = document.querySelectorAll('.cards-stats-one');
let h1 = document.querySelectorAll('h1');
let p = document.querySelectorAll('p');
let bodyColor = document.querySelector('body')
let overviewBlocks = document.querySelectorAll('.overview-blocks');
let headerAll = document.querySelectorAll('.header');
let mains = document.querySelectorAll('.mains');
let headerSocial = document.querySelectorAll('.header-social');

function animationButton(){
    darkButtonAnimation.classList.toggle('switch-dark');
    cardTop.forEach(element => {
        if(darkButtonAnimation.classList.contains('switch-dark')){
            element.classList.add('card-stats-dark');
        }else{
            element.classList.remove('card-stats-dark');
        }
    })
    h1.forEach(element => {
        if(darkButtonAnimation.classList.contains('switch-dark')){
            element.classList.add('text-color');
        }else{
            element.classList.remove('text-color');
        }
    })
    p.forEach(element => {
        if(darkButtonAnimation.classList.contains('switch-dark')){
            element.classList.add('text-color');
        }else{
            element.classList.remove('text-color');
        }
    })

    if(darkButtonAnimation.classList.contains('switch-dark')){
        bodyColor.style.background = 'hsl(230, 17%, 14%)'
    }else{
        bodyColor.style.background = '#ffffff'
    }

    overviewBlocks.forEach(element => {
        if(darkButtonAnimation.classList.contains('switch-dark')){
            element.classList.add('overview-blocks-dark');
        }else{
            element.classList.remove('overview-blocks-dark');
        }
    })

    headerAll.forEach(element => {
        if(darkButtonAnimation.classList.contains('switch-dark')){
            element.classList.add('header-dark');
        }else{
            element.classList.remove('header-dark');
        }
    })

    headerSocial.forEach(element => {
        if(darkButtonAnimation.classList.contains('switch-dark')){
            element.classList.add('header-blocks');
        }else{
            element.classList.remove('header-blocks');
        }
    })
}

darkButton.addEventListener('click', ()=>{
    animationButton();
})