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






// const waitFnc = function (seconds) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// const imageContainer = document.querySelector(".images");
// let currentImage;

// const createImgElement = function (imagePath) {
//   return new Promise((resolve, reject) => {
//     const imgEl = document.createElement("img");
//     imgEl.src = imagePath;

//     imgEl.addEventListener("load", function () {
//       imageContainer.appendChild(imgEl);
//       resolve(imgEl);
//     });

//     imgEl.addEventListener("error", function () {
//       reject(new Error("Image Not Found"));
//     });
//   });
// };

// createImgElement("im/DF-301D-4.jpg")
//   .then((image) => {
//     currentImage = image;
//     console.log("Loaded Image");
//     return waitFnc(5);
//   })
//   .then(() => {
//     currentImage.style.display = "none";
//     return createImgElement("im/ezgif.com-gif-maker-29.jpg");
//   })
//   .then((image2) => {
//     currentImage = image2;
//     console.log("Image 2 is loaded");
//     return wait(7);
//   })
//   .then(() => {
//     currentImage.style.display = "none";
//     return createImgElement("im/DF-301D-4.jpg");
//   })

//     .then((image) => {
//       currentImage = image;
//       console.log("Loaded Image");
//       return waitFnc(5);
//     })
  
//   .catch((error) => console.log(error));