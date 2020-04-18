import Card from './card';
class CardsGroup {
  constructor(name, cardsConfig) {
    this.name = name;
    this.cardsConfig = cardsConfig;
    this.cardsArray = this.generateCards();
  }

  createDomTitleCard() {
    const cardsGroup = document.createElement('div');
    const cardsGroupText = document.createElement('div');
    const cardsGroupImg = document.createElement('img');
    const cardImgSrc = `./assets/${this.cardsConfig[0].image}`;

    cardsGroupText.innerHTML = this.name;
    cardsGroupImg.src = cardImgSrc;
    cardsGroup.id = this.name;
    cardsGroupImg.id = this.name;
    cardsGroupText.id = this.name;
    cardsGroup.classList.add('cards-group');
    cardsGroupText.classList.add('main-card-text');
    cardsGroup.appendChild(cardsGroupImg);
    cardsGroup.appendChild(cardsGroupText);
    return cardsGroup;
  }

  generateCards() {
    const cards = this.cardsConfig.map((el) => {
      return new Card(el);
    })
    return cards;
  }

  createDOMCards() {
    const domCards = document.createElement('div');
    const buttonPlay = document.createElement('button');

    domCards.classList.add('cards-group-container');
    buttonPlay.classList.add('button-play');
    this.cardsArray.forEach((el) => {
      const domCard = el.createDOMCard();
      domCard.addEventListener('click', (event) => {
        this.analyseCardEvent(el, event);
      });
     
      domCards.appendChild(domCard);
      domCards.appendChild(buttonPlay);
    });
    
    return domCards;
  }

  analyseCardEvent(card, event) {
    if (event.target.id) {
      card.audioPlay(event.target.id);
    }
    else {
      console.log(card);
      console.log(event.target.previousSibling.previousSibling);
      event.target.previousSibling.classList.toggle('flip');
      event.target.previousSibling.previousSibling.classList.toggle('flip');
    }

  }
}

export default CardsGroup;