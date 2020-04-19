class Card {
  constructor(
    { word, translation, image, audioSrc, }
  ) {
    this.word = word;
    this.translation = translation;
    this.image = image;
    this.audioSrc = audioSrc;
  }

  createDOMCard() {

    const cardItem = document.createElement('div');
    const cardImgUrl = `url(./assets/${this.image})`;
    const cardFront = document.createElement('div');
    const cardFrontText = document.createElement('div');
    const cardBack = document.createElement('div');
    const cardBackText = document.createElement('div');
    const cardRotateImg = document.createElement('img');

    cardFrontText.innerHTML = this.word;
    cardBackText.innerHTML = this.translation;
    cardRotateImg.src = './assets/img/rotate.png';
    cardRotateImg.classList.add('rotate')
    cardFront.id = this.word;
    cardFront.classList.add('front-face');
    cardBack.classList.add('back-face');
    cardFrontText.classList.add('card-text');
    cardBackText.classList.add('card-text');
    cardBack.classList.add('flip');
    cardFront.style.backgroundImage = cardImgUrl;
    cardBack.style.backgroundImage = cardImgUrl;
    cardItem.classList.add('card');
    cardFront.appendChild(cardFrontText);
    cardBack.appendChild(cardBackText);
    cardItem.appendChild(cardFront);
    cardItem.appendChild(cardBack);
    cardItem.appendChild(cardRotateImg);

    return cardItem;
  }
}

export default Card;