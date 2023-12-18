let sliderImage = document.querySelector(".sliderImage");
let images = ["Bee.jpeg", "Leo.jpeg","lightHouse.jpeg","Peak.jpeg","Prague.jpeg","Seals.jpeg","SunSeet.jpeg","Venice.jpeg","Whale.jpg","wonda.jpeg"];
let i = 0;

function back() {
  if(i <= 0) i = images.length;
  i --;
  return setImg();

}

function next() {
  if(i >= images.length - 1) i = -1;
  i++;
  return setImg();

}

function setImg() {
  return sliderImage.setAttribute("src", "images/" + images[i]);

}

