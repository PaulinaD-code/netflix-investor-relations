const buttonChange = document.querySelector('.background-change');
let companyEl = document.querySelector('.company-profile');
let financialImg = document.querySelector('.financial-image');
let offerLetters = document.querySelectorAll('.financial-container-a');
let QuickLinksTitle = document.querySelector('.quick--title')
let blackNwhite = document.querySelector('.black-white');
let magnifierIcon = document.querySelector('.magnifier-icon')

let facebookIcon = document.querySelector('.footer--icon .fot-facebook-red');
let twittrIcons = document.querySelector('.footer--icon .fot-fab-twitter');
let instaIcon = document.querySelector('.footer--icon .fot-fab-instagram');
let footerIcon = document.querySelector('.footer--icon');

let fbIcon = document.getElementById('fb-icon');
let tweetIcon = document.getElementById('twitter-icon');
let instagramIcon = document.getElementById('insta-con');
let inIcon = document.getElementById('in-icon');

let buttonArrowWhite1 = document.getElementById('arrowWhite1');
let buttonArrowWhite2 = document.getElementById('arrowWhite2');
let fC01 = document.getElementById('f-c-01');
let fC02 = document.getElementById('f-c-02');
let fC03 = document.getElementById('f-c-03');
let quoterlySecondBackground = document.querySelector('.quarterly--earnings');
let releaseBtn1 = document.getElementById('releaseBtn01');
let releaseBtn2 = document.getElementById('releaseBtn02');

buttonChange.addEventListener('click', ()=>{
 
  magnifierIcon.classList.toggle('active');
  companyEl.classList.toggle('active');
  releaseBtn1.classList.toggle('release--btn-changed');
  releaseBtn2.classList.toggle('release--btn-changed');
  fC01.classList.toggle('financial-container-a-changed');
  fC02.classList.toggle('financial-container-a-changed');
  fC03.classList.toggle('financial-container-a-changed');
  buttonArrowWhite1.classList.toggle('active');
  buttonArrowWhite2.classList.toggle('active');
  QuickLinksTitle.classList.toggle('active');
  quoterlySecondBackground.classList.toggle('quarterly--earnings-changed');

  financialImg.classList.toggle('financial-image-changed');
 
  fbIcon.classList.toggle('fot-facebook-white');
  tweetIcon.classList.toggle('fot-fab-twitter-white');
  instagramIcon.classList.toggle('fot-fab-instagram-white');
  inIcon.classList.toggle("footer--icon-white");
  
})
