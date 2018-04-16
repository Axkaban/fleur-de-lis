
const modal = document.getElementById('map-modal');
const map = document.getElementById('map');
const button = document.querySelector('.close');
const addressOne = document.getElementById('gmaps-one');
const addressTwo = document.getElementById('gmaps-two');
const mobileAddressOne = document.querySelector('.address-one');
const mobileAddressTwo = document.querySelector('.address-two');
const mobileNav = document.querySelector('.mobile-nav-button');
const nav = document.querySelector('.flex-container');


addressOne.addEventListener('click', ()=>{
    map.setAttribute('src', "https://www.google.com/maps/embed/v1/place?q=4710%20McHugh%20Rd.%20%20Zachary%2C%20La%2070791%20&key=AIzaSyAc4OL-Mm5iLsYdiSrJg6HyYjE8a22Qeco");
    modal.classList.toggle('open');


});

addressTwo.addEventListener('click', () => {
  map.setAttribute('src', "https://www.google.com/maps/embed/v1/place?q=340%20St.%20Joseph%20St.%20%20Baton%20Rouge%2C%20La.%2070806%20%20at%20One%20Heart%20Yoga%20center&key=AIzaSyAc4OL-Mm5iLsYdiSrJg6HyYjE8a22Qeco");

  modal.classList.toggle('open');


});

mobileAddressOne.addEventListener('click', () => {
  map.setAttribute('src', "https://www.google.com/maps/embed/v1/place?q=4710%20McHugh%20Rd.%20%20Zachary%2C%20La%2070791%20&key=AIzaSyAc4OL-Mm5iLsYdiSrJg6HyYjE8a22Qeco");
  modal.classList.toggle('open');


});

mobileAddressTwo.addEventListener('click', () => {
  map.setAttribute('src', "https://www.google.com/maps/embed/v1/place?q=340%20St.%20Joseph%20St.%20%20Baton%20Rouge%2C%20La.%2070806%20%20at%20One%20Heart%20Yoga%20center&key=AIzaSyAc4OL-Mm5iLsYdiSrJg6HyYjE8a22Qeco");

  modal.classList.toggle('open');


});

mobileNav.addEventListener('click', ()=>{
  nav.classList.toggle('open-nav');

})



button.addEventListener('click', ()=>{
    modal.classList.toggle('open');

})

window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.toggle('open');

  }
}

