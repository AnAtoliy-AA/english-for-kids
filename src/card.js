import cards from '../assets/cards'

class Card {
  constructor() {
    this.ctreateCard();
    this.addAudio();
  }

  ctreateCard() {
    for (let i = 1; i < cards.length; i++) {
      const cardCategory = document.createElement('div');
      const mainContainer = document.getElementById('container');
      const cCard = cards[i];

      cardCategory.id = cards[0][i - 1];
      cardCategory.classList.add('card-category');
      mainContainer.appendChild(cardCategory);

      for (let k = 0; k < cCard.length; k++) {
        const cardContainer = document.createElement('div');
        const cardImgUrl = `url(./assets/${cCard[k].image})`;
        const cardFront = document.createElement('div');
        const cardBack = document.createElement('div');
        const rotateImg = document.createElement('img');

        cardFront.innerHTML = cCard[k].word;
        cardBack.innerHTML = cCard[k].translation;
        rotateImg.src = './assets/img/rotate.png';
        rotateImg.classList.add('rotate')
        cardFront.classList.add('font-face');
        cardBack.classList.add('back-face');
        cardBack.classList.add('hidden');
        cardFront.style.backgroundImage = cardImgUrl;
        cardBack.style.backgroundImage = cardImgUrl;
        cardContainer.classList.add('card');
        cardCategory.appendChild(cardContainer);
        cardContainer.appendChild(cardFront);
        cardContainer.appendChild(cardBack);
        cardContainer.appendChild(rotateImg);
        //cardContainer.classList.add('hidden');
      }
    }
  }
  audioPlay(name) {
    const audio = new Audio(`./assets/audio/${name}.mp3`);
    audio.play();
  }
  addAudio() {
    const cardFront = document.querySelectorAll('.font-face');

    cardFront.forEach((e) => {
      e.addEventListener('click', (event) => {
        this.audioPlay(event.target.innerHTML);
      });
    });
  }
}

export default Card;