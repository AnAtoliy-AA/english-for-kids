import Card from './card';
class CardsGroup {
  constructor(name, cardsConfig) {
    this.name = name;
    this.cardsConfig = cardsConfig;
    this.cardsArray = this.generateCards();
  }

  createDomTitleCard() {
    const cardsGroup = document.createElement('div');
    const cardsGroupImg = document.createElement('img');
    const cardImgSrc = `./assets/${this.cardsConfig[0].image}`;

    cardsGroup.innerHTML = this.name;
    cardsGroupImg.src = cardImgSrc;
    cardsGroup.id = this.name;
    cardsGroup.classList.add('cards-group');
    cardsGroup.classList.add('card');
    cardsGroup.appendChild(cardsGroupImg);
    return cardsGroup;
  }

  generateCards() {
    const cards = [
      new Card(this.cardsConfig[0]),
      new Card(this.cardsConfig[1]),
      new Card(this.cardsConfig[2]),
      new Card(this.cardsConfig[3]),
      new Card(this.cardsConfig[4]),
      new Card(this.cardsConfig[5]),
      new Card(this.cardsConfig[6]),
      new Card(this.cardsConfig[7]),
    ]
  
    return cards;
  }
  createDOMCards() {
    const domCards = document.createElement('div');
    this.cardsArray.forEach((el) => {
      const domCard = el.createDOMCard();
      domCards.appendChild(domCard);
    });
    return domCards;
  }
}

export default CardsGroup;