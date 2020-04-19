import Card from './card';
class CardsGroup {
  constructor(name, cardsConfig, container) {
    this.name = name;
    this.cardsConfig = cardsConfig;
    this.cardsArray = this.generateCards();
    this.container = container;

    this.selectedCardsIds = [];
    this.enabledCardsIds = this.cardsArray.map(el => el.word);
    this.activeCardId = null;
    this.lastAudio = '';
    this.scoreResult = [];
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
    const cards = this.cardsConfig.map((el) => new Card(el));

    return cards;
  }

  createDOMCards() {
    const domCards = document.createElement('div');
    const buttonPlay = document.createElement('div');
    const starContainer = document.createElement('div');
    const audioRow = this.cardsConfig.map((el) => el.word);
    const randomElement = audioRow[Math.floor(Math.random() * audioRow.length)];

    domCards.classList.add('cards-group-container');
    starContainer.classList.add('star-container');
    buttonPlay.classList.add('button-play');
    buttonPlay.classList.add('hidden');
    buttonPlay.innerHTML = 'Start game';

    buttonPlay.addEventListener('click', () => {
      this.audioPlay(randomElement);
      this.lastAudio = randomElement;
    });

    domCards.appendChild(starContainer);
    this.cardsArray.forEach((el) => {
      const domCard = el.createDOMCard();
      // if (this.container.trainMode) {
      domCard.addEventListener('click', (event) => {
        this.analyseCardEvent(event);
      });
      // }
      domCards.appendChild(domCard);
    });
    domCards.appendChild(buttonPlay);

    return domCards;
  }

  analyseCardEvent(event) {

    if (event.target.id) {
      if (this.container.trainMode) {
        this.audioPlay(event.target.id);
      } else {
        this.activeCardId = event.target.id;
        if (this.activeCardId === this.lastAudio) {
          console.log('MAtCH');
          console.log('this.enabledCardsIds',this.enabledCardsIds);
          this.enabledCardsIds = this.removeElementFromArray(this.enabledCardsIds, this.activeCardId);
          const randomElement = this.enabledCardsIds[Math.floor(Math.random() * this.enabledCardsIds.length)];
          console.log('this.enabledCardsIds',this.enabledCardsIds);
          this.audioPlay(randomElement);
        } else {
          console.log('DO NOT MAtCH');
        }
      }
    } else if (event.target.classList.contains('rotate')) {
      event.target.previousSibling.classList.toggle('flip');
      event.target.previousSibling.previousSibling.classList.toggle('flip');
      document.querySelectorAll('.card').forEach((el) => {
        el.addEventListener('blur', () => {
          event.target.previousSibling.classList.toggle('flip');
          event.target.previousSibling.previousSibling.classList.toggle('flip');
        });
      });
    }
  }

  removeElementFromArray(array, value) {
    const arr = [...array];
    const index = arr.indexOf(value);
    arr.splice(index, 1);
    return arr;
  }



  audioPlay(name) {
    const audio = new Audio(`./assets/audio/${name}.mp3`);

    audio.play();
  }
}

export default CardsGroup;