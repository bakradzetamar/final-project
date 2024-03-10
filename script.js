const hamManu= document.querySelector ('.ham-menu');
const offScreenMenu = document. querySelector('.off-screen-menu');

hamManu.addEventListener('click', () => {
    hamManu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

let divContainer = document.querySelectorAll(".container");

divContainer.forEach((el) => {
  console.log(el); 
  el.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});