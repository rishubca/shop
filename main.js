let menu = document.querySelector('#menu-icon');
let Navbar = document.querySelector('.Navbar');
 
menu.onclick = () => {
    Navbar.classList.toggle('active');
}
 
window.onscroll = () => {
    Navbar.classList.remove('active');
}