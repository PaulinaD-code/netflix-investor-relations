const menuList = document.querySelector('.links-ol')
const burgerIcon = document.querySelector('.burger');

burgerIcon.addEventListener('click', ()=>{
  menuList.classList.toggle('active');
})



