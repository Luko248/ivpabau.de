const body = document.body;
const menu = document.querySelector('.menu')
const menuBtn = document.getElementById('menuBtn')
const navItem = document.querySelectorAll('.nav__item')

export function navInit(){
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('burger--open')
        menu.classList.toggle('menu--open')
        body.classList.toggle('overflow-hidden')
    })
    
    navItem.forEach(item => {
        item.addEventListener('click', () => {
            for (let i = 0; i < navItem.length; i++){
                navItem[i].classList.remove('nav__item--active')
            }

            item.classList.add('nav__item--active')

            if (menu.classList.contains('menu--open')){
                menuBtn.classList.remove('burger--open')
                menu.classList.remove('menu--open')
                body.classList.remove('overflow-hidden')
            }
        })
    }) 

    document.addEventListener('click', (e) => {
        if (e.target !== menuBtn){
            menuBtn.classList.remove('burger--open')
            menu.classList.remove('menu--open')
            body.classList.remove('overflow-hidden')
        }
    })
}