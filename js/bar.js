 let navBar = document.querySelector('.navbar');
 let menuBtn = document.querySelector('#menu-btn');

 menuBtn.onclick = () => {
     menuBtn.classList.toggle('fa-times');
     navBar.classList.toggle('active');
 }