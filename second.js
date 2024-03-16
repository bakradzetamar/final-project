
let slider_pic = document.querySelector('.slider-pic');
let images =  ['d.jpg', 'f.jpg', 'j.jpg' 'e.jpg'];
let i = 0;

function prev() {
    if( i <= 0 )  i = images.length;
    i--;
    return setImg();
}

function next() {
    if( i >= images.length-1 )  i = -1;
    i++;
    return setImg();
}

function setImg() {
    return slider_pic.setAttribute('src', 'images/'+ images[i]);
}