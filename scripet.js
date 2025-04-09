const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {
    const image = card.querySelector('.flip-card-front img');
    const flipInner = card.querySelector('.flip-card-inner');

    image.addEventListener('click', function () {
        flipInner.style.transform = 'rotateY(180deg)';
    });
});

const button = document.querySelector('.btn button');
const parentDiv = document.getElementById('parent');

button.addEventListener('click', function () {
    button.style.display = 'none'; 
    parentDiv.style.display = 'flex';
});
