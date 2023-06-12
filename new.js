burger = document.querySelector('.burger');
right = document.querySelector('.right');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.navlist');


burger.addEventListener('click', () => {
    navbar.classList.toggle('v-class-resp')
    navlist.classList.toggle('v-class-resp')
    right.classList.toggle('h-nav-resp')

})