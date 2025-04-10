const flipCards = document.querySelectorAll('.flip-card');

const scoreElement = document.querySelector(".score span");
const timerElement = document.querySelector(".timer span");
const clickCountElement = document.querySelector(".click span");
const flipcardfront= document.querySelector(".flip-card-front img")
const flipCardsBack= document.querySelectorAll(".flip-card-back")

let score = 0;
let clicks=0;
let timeLeft = 20;
let timerInterval;
 const images = [
    "img/image2.jpg",
    "img/image3.jpg",
    "img/image4.jpg",
    "img/image5.webp",
    "img/image6.avif",
    "img/amitabh.webp",
  ];




  let new_array = [...images, ...images];
console.log(new_array);

let dummy=[]



// flipCards.forEach(card => {
//     const image = card.querySelector('.flip-card-front img');
//     const flipInner = card.querySelector('.flip-card-inner');

//     image.addEventListener('click', function () {
//         flipInner.style.transform = 'rotateY(180deg)';
//         updateClickCount()
//     });
// });

const button = document.querySelector('.btn button');
const parentDiv = document.getElementById('parent');
const details=document.querySelector(".details")
newfunction()
button.addEventListener('click', function () {
    details.style.display="block"
    

    button.style.display = 'none'; 
    parentDiv.style.display = 'flex';
    startTimer()
    
});

function newfunction() {
  for (let i = 0; i < new_array.length; i++) {
    let image = document.createElement("img");
    image.src = new_array[selectimage()];
    flipCardsBack[i].append(image);
  }
}

function selectimage() {
  let check = Math.floor(Math.random() * new_array.length);
  console.log(check);
  
  if (dummy.includes(check)) return selectimage();
  else {
    dummy.push(check);

    console.log(dummy);
    
    return check;
  }
}

function startTimer() {
    score = 0;
    timeLeft = 50;
    clicks=0
    scoreElement.innerText = score;
    timerElement.textContent = timeLeft;
    clickCountElement.textContent = clicks;
   
    timerInterval = setInterval(() => {
      timeLeft--;
      
      timerElement.textContent = timeLeft;
  
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        alert(`Time's up! Your score is ${score}`);
      }
    }, 1000);
  
  }

  function updateClickCount() {
    clicks++;
    clickCountElement.textContent = clicks;
}






let flippedCards = [];

flipCards.forEach(card => {
    const frontImage = card.querySelector('.flip-card-front img');
    const flipInner = card.querySelector('.flip-card-inner');

    frontImage.addEventListener('click', function () {
        if (flippedCards.length < 2 && !flippedCards.includes(card)) {
            flipInner.style.transform = 'rotateY(180deg)';
            flippedCards.push(card);
            updateClickCount();

            if (flippedCards.length === 2) {
                checkMatch();
            }
        }
    });
});

function checkMatch() {
    const [card1, card2] = flippedCards;
    const img1 = card1.querySelector('.flip-card-back img').src;
    const img2 = card2.querySelector('.flip-card-back img').src;

    if (img1 === img2) {
        score++;
        scoreElement.textContent = score;
        flippedCards = [];
        console.log(flippedCards);
        
    } else {
        setTimeout(() => {
            card1.querySelector('.flip-card-inner').style.transform = 'rotateY(0deg)';
            card2.querySelector('.flip-card-inner').style.transform = 'rotateY(0deg)';
            flippedCards = [];
        }, 1000);
    }
}





