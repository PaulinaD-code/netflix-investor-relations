const burger = document.querySelector('.burger');
const navLinks = document.querySelector('ul');

burger.addEventListener('click', ()=>{
  navLinks.classList.toggle('active');
})

const navLink1 = document.getElementById('nav-link-1');
const navAnchors1 = document.getElementById('nav-anchors-1');
const navLink2 = document.getElementById('nav-link-2');
const navAnchors2 = document.getElementById('nav-anchors-2');
const navLink3 = document.getElementById('nav-link-3');
const navAnchors3 = document.getElementById('nav-anchors-3');
const navLink4 = document.getElementById('nav-link-4');
const navAnchors4 = document.getElementById('nav-anchors-4');
const navLink5 = document.getElementById('nav-link-5');
const navAnchors5 = document.getElementById('nav-anchors-5');
const navLink6 = document.getElementById('nav-link-6');
const navAnchors6 = document.getElementById('nav-anchors-6');

navLink1.addEventListener('click', ()=>{
  navAnchors1.classList.toggle('link-list-visible');
  navLink1.classList.toggle('active');

  
  navAnchors2.className = 'link-list';
  navAnchors3.className = 'link-list';
  navAnchors4.className = 'link-list';
  navAnchors5.className = 'link-list';
  navAnchors6.className = 'link-list';

  navLink2.className = "nav--li-child";
  navLink3.className = "nav--li-child";
  navLink4.className = "nav--li-child";
  navLink5.className = "nav--li-child";
  navLink6.className = "nav--li-child";
})

navLink2.addEventListener('click', ()=>{
  navAnchors2.classList.toggle('link-list-visible');
  navLink2.classList.toggle('active');

  navAnchors1.className = 'link-list';
  navAnchors3.className = 'link-list';
  navAnchors4.className = 'link-list';
  navAnchors5.className = 'link-list';
  navAnchors6.className = 'link-list';

  navLink1.className = "nav--li-child";
  navLink3.className = "nav--li-child";
  navLink4.className = "nav--li-child";
  navLink5.className = "nav--li-child";
  navLink6.className = "nav--li-child";
})

navLink3.addEventListener('click', ()=>{
  navAnchors3.classList.toggle('link-list-visible');
  navLink3.classList.toggle('active');

  navAnchors1.className = 'link-list';
  navAnchors2.className = 'link-list';
  navAnchors4.className = 'link-list';
  navAnchors5.className = 'link-list';
  navAnchors6.className = 'link-list';

  navLink1.className = "nav--li-child";
  navLink2.className = "nav--li-child";
  navLink4.className = "nav--li-child";
  navLink5.className = "nav--li-child";
  navLink6.className = "nav--li-child";
})

navLink4.addEventListener('click', ()=>{
  navAnchors4.classList.toggle('link-list-visible');
  navLink4.classList.toggle('active');

  navAnchors1.className = 'link-list';
  navAnchors2.className = 'link-list';
  navAnchors3.className = 'link-list';
  navAnchors5.className = 'link-list';
  navAnchors6.className = 'link-list';

  navLink1.className = "nav--li-child";
  navLink2.className = "nav--li-child";
  navLink3.className = "nav--li-child";
  navLink5.className = "nav--li-child";
  navLink6.className = "nav--li-child";
})

navLink5.addEventListener('click', ()=>{
  navAnchors5.classList.toggle('link-list-visible');
  navLink5.classList.toggle('active');

  navAnchors1.className = 'link-list';
  navAnchors2.className = 'link-list';
  navAnchors3.className = 'link-list';
  navAnchors4.className = 'link-list';
  navAnchors6.className = 'link-list';

  navLink1.className = "nav--li-child";
  navLink2.className = "nav--li-child";
  navLink3.className = "nav--li-child";
  navLink4.className = "nav--li-child";
  navLink6.className = "nav--li-child";
})

navLink6.addEventListener('click', ()=>{
  navAnchors6.classList.toggle('link-list-visible');
  navLink6.classList.toggle('active');

  navAnchors1.className = 'link-list';
  navAnchors2.className = 'link-list';
  navAnchors3.className = 'link-list';
  navAnchors4.className = 'link-list';
  navAnchors5.className = 'link-list';

  navLink1.className = "nav--li-child";
  navLink2.className = "nav--li-child";
  navLink3.className = "nav--li-child";
  navLink4.className = "nav--li-child";
  navLink5.className = "nav--li-child";
})

const burgerExit = document.querySelector('.hamburger-exit');

burgerExit.addEventListener('click', ()=>{
  navLinks.className = 'nav--ul';

  navAnchors1.className = 'link-list';
  navAnchors2.className = 'link-list';
  navAnchors3.className = 'link-list';
  navAnchors4.className = 'link-list';
  navAnchors5.className = 'link-list';
  navAnchors6.className = 'link-list';

  navLink1.className = "nav--li-child";
  navLink2.className = "nav--li-child";
  navLink3.className = "nav--li-child";
  navLink4.className = "nav--li-child";
  navLink5.className = "nav--li-child";
  navLink6.className = "nav--li-child";
})