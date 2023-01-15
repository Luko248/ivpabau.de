const body = document.body;
const headerLanding = document.querySelector('.header--landing');
const nav = document.querySelector('.nav');
const menu = document.querySelector('.nav__menu')
const menuBtn = document.querySelector('.burger-button')
const navItem = document.querySelectorAll('.nav__item')

export function navInit(){
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('burger-button--open')
        menu.classList.toggle('nav__menu--open')
        body.classList.toggle('overflow-hidden')
    })
    
    navItem.forEach(item => {
        item.addEventListener('click', () => {
            for (let i = 0; i < navItem.length; i++){
                navItem[i].classList.remove('nav__item--active')
            }

            item.classList.add('nav__item--active')

            if (menu.classList.contains('nav__menu--open')){
                menuBtn.classList.remove('burger-button--open')
                menu.classList.remove('nav__menu--open')
                body.classList.remove('overflow-hidden')
            }
        })
    }) 

    document.addEventListener('click', (e) => {
        if (e.target !== menuBtn){
            menuBtn.classList.remove('burger-button--open')
            menu.classList.remove('nav__menu--open')
            body.classList.remove('overflow-hidden')
        }
    })
}