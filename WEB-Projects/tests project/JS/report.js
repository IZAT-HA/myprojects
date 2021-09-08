var landingpage = document.querySelector('.container');

var imgsArray = [
    "img.jpg",
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
];

setInterval(() => {
    var randomNamber = Math.floor(Math.random() * imgsArray.length);
    landingpage.style.backgroundImage = 'url("../image/' + imgsArray[randomNamber] + '")';

}, 5000);