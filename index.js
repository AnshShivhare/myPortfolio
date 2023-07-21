Let menuIcon =document.querySelector('#menu-icon');
Let navbar =document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('');
    navbar.classList.toggle('active');

};