const images = [
'banana.png',
'cantaloup.png',
'cerise.png',
'citron.png',
'figues.png',
'kiwi.png',
'mangue.png',
'noix-de-coco.png',
'pamplemousse.png',
'pasteque.png',
'pomegranate.png',
'pomme.png'
 ];
var container_color = document.querySelector(".container");
const players = document.querySelectorAll(".player .score");
var P = 0;
const conImg = document.querySelector(".images");

function setImages() {
  let arr = [...images, ...images];

  let arr2 = [];

  arr.forEach((image) => {
    if (Math.floor(Math.random() * 100) % 2 === 0) {
      arr2.push(image);
    } else {
      arr2.unshift(image);
    }
  });
  conImg.innerHTML = '';
  arr2.forEach((image) => {
    conImg.innerHTML += `<div class="cell"><img src="images\\${image}" /><div></div></div>`;
  });
  check();
}
setImages();
var clickedImg = [];
function check() {
  const cells = document.querySelectorAll(".cell");

  cells.forEach((cell, index) => {
    cell.onclick = () => {
if(!(cell.style.transform === "rotateY(180deg)")){
      if (clickedImg.length <= 1) {
        clickedImg.push(index);

        cell.style.transform = "rotateY(180deg)";
        cell.querySelector("img").style.opacity = 1;
        cell.querySelector("div").style.opacity = 0;
        setTimeout(() => {
          if (clickedImg.length >= 2) {
            if (
              cells[clickedImg[0]].querySelector("img").src ===
              cells[clickedImg[1]].querySelector("img").src
            ) {
              players[P].innerHTML = Number(players[P].innerHTML) + 1;
             
              clickedImg = [];
              winner();
            } else {
              clickedImg.forEach((i) => {
                cells[i].style.transform = "rotateY(0deg)";
                cells[i].querySelector("img").style.opacity = 0;
                cells[i].querySelector("div").style.opacity = 1;
              });
              changePlayer();
              clickedImg = [];
            }
          }
        }, 3000);
      }


    }
    };
  });
}
function changePlayer() {
  if (P === 0) {
    P = 1;
    container_color.style.background = "rgb(1, 139, 139)";
  } else {
    P = 0;
    container_color.style.background = "rgb(255, 0, 34)";
  }
}
var cards = 0;
function winner() {
    cards += 1;
    if (cards === images.length){
       if (Number(players[0].innerHTML) < Number(players[1].innerHTML)) {
        players[1].parentElement.style.background = 'goldenrod';
       } else if (Number(players[0].innerHTML) > Number(players[1].innerHTML)){
        players[0].parentElement.style.background = 'goldenrod';
       }else{
        players[0].parentElement.style.background = 'skyblue';
        players[1].parentElement.style.background = 'skyblue';
       }
       setTimeout(() => {
        players[0].parentElement.style.background = '';
        players[1].parentElement.style.background = '';
        players[0].innerHTML = '0';
        players[1].innerHTML = '0';

        setImages();
    },4000)
    }
   
}
window.addEventListener("orientationchange", function() {
  if(window.orientation != 0){

  }
});
// function of click event handler