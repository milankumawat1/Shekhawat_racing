burger = document.querySelector('.burger')
navbar = document.querySelector('#navbar')
navlist = document.querySelector('.navlist')

// align = document.getElementsByClassName('.align')


burger.addEventListener('click', ()=>{
    // align.classList.toggle('hide');
    navlist.classList.toggle('hide');
    navbar.classList.toggle('rh');
})


