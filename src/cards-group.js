import Card from './card';
class CardsGroup {
  constructor(name, cardsConfig, container) {
    this.name = name;
    this.cardsConfig = cardsConfig;
    this.cardsArray = this.generateCards();
    this.container = container;

    this.selectedCardsIds = [];
    this.enabledCardsIds = this.cardsArray.map((el) => el.word);
    this.activeCardId = null;
    this.lastAudio = '';
    this.scoreResult = [];
    this.gameStarted = false;
  }

  resetGameState() {
    this.selectedCardsIds = [];
    this.enabledCardsIds = this.cardsArray.map((el) => el.word);
    this.activeCardId = null;
    this.lastAudio = '';
    this.scoreResult = [];
    this.gameStarted = false;
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

  resetStartGameButton() {
    const buttonPlay = document.getElementById('button-play-repeat');

    console.log('A: ', buttonPlay);

    buttonPlay.classList.add('button-play');
    buttonPlay.classList.add('hidden');
    buttonPlay.innerHTML = 'Start game';

    buttonPlay.addEventListener('click', () => {
      this.lastAudio = this.randomElement;
      this.audioPlay(this.lastAudio);

      buttonPlay.innerHTML = '';
      buttonPlay.classList.remove('button-play');
      buttonPlay.classList.add('button-play-active');
      buttonPlay.style.backgroundImage = 'url(./assets/img/repeat.png)';
      this.setGameStarted(true);
    });
  }

  createDOMCards() {
    const domCards = document.createElement('div');
    const buttonPlay = document.createElement('div');
    const starContainer = document.createElement('div');

    buttonPlay.setAttribute('id', 'button-play-repeat');
    this.randomElement = this.enabledCardsIds[
      Math.floor(Math.random() * this.enabledCardsIds.length)
    ];

    domCards.classList.add('cards-group-container');
    starContainer.classList.add('star-container');
    buttonPlay.classList.add('button-play');
    buttonPlay.classList.add('hidden');
    buttonPlay.innerHTML = 'Start game';
    buttonPlay.addEventListener('click', () => {
      this.lastAudio = this.randomElement;
      setTimeout(() => {
        this.audioPlay(this.lastAudio);
      }, 500);
      buttonPlay.innerHTML = '';
      buttonPlay.classList.remove('button-play');
      buttonPlay.classList.add('button-play-active');
      buttonPlay.style.backgroundImage = 'url(./assets/img/repeat.png)';
      this.setGameStarted(true);
    });

    domCards.appendChild(starContainer);
    this.cardsArray.forEach((el) => {
      const domCard = el.createDOMCard();

      domCard.addEventListener('click', (event) => {
        this.analyseCardEvent(event);
      });
      if (!this.container.trainMode) {
        domCard.querySelector('.card-text').classList.toggle('hidden');
        domCard.querySelector('.rotate').classList.toggle('hidden');
        domCard.classList.toggle('card-cover');
      }
      domCards.appendChild(domCard);
    });
    if (!this.container.trainMode) {
      buttonPlay.classList.remove('hidden');
    }
    domCards.appendChild(buttonPlay);

    return domCards;
  }

  analyseCardEvent(event) {
    const starContainer = document.querySelector('.star-container');
    const starWin = document.createElement('img');
    const starLoose = document.createElement('img');

    starWin.src = './assets/img/star-win.png';
    starLoose.src = './assets/img/star-loose.png';
    if (event.target.id) {
      if (this.container.trainMode) {
        this.audioPlay(event.target.id);
      } else if (
        this.gameStarted &&
        !event.target.classList.contains('inactive')
      ) {
        this.activeCardId = event.target.id;
        if (this.activeCardId === this.lastAudio) {
          this.audioPlay('correct');
          event.target.classList.add('inactive');
          starContainer.appendChild(starWin);
          this.enabledCardsIds = this.removeElementFromArray(
            this.enabledCardsIds,
            this.activeCardId
          );
          this.randomElement = this.enabledCardsIds[
            Math.floor(Math.random() * this.enabledCardsIds.length)
          ];

          setTimeout(() => {
            this.audioPlay(this.randomElement);
          }, 700);
          this.lastAudio = this.randomElement;
          if (this.enabledCardsIds.length === 0) {
            setTimeout(() => {
              this.gameOver();
            }, 500);
          }
        } else {
          this.audioPlay('error');
          starContainer.appendChild(starLoose);
          this.scoreResult++;
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

  setGameStarted(value) {
    this.gameStarted = value;
  }

  removeElementFromArray(array, value) {
    const arr = [...array];
    const index = arr.indexOf(value);

    arr.splice(index, 1);

    return arr;
  }

  gameOver() {
    const mainContainer = document.querySelector('.main-container');
    const winMessage = document.createElement('div');
    const looseMessage = document.createElement('div');

    if (this.scoreResult > 0) {
      this.audioPlay('failure');
      this.container.clearPage();
      if (this.scoreResult === 1) {
        looseMessage.innerHTML = `You have ${this.scoreResult} mistake!`;
      } else {
        looseMessage.innerHTML = `You have ${this.scoreResult} mistakes!`;
      }
      looseMessage.classList.add('loose-message');
      looseMessage.style.backgroundImage = 'url(./assets/img/failure.jpg)';
      mainContainer.appendChild(looseMessage);
    } else {
      this.audioPlay('success');
      this.container.clearPage();
      winMessage.classList.add('win-message');
      winMessage.innerHTML = 'You WIN!';
      winMessage.style.backgroundImage = 'url(./assets/img/success.jpg)';
      mainContainer.appendChild(winMessage);
    }

    this.resetGameState();
    setTimeout(() => {
      this.container.navigateToMainMenu();
    }, 2000);
  }

  audioPlay(name) {
    if (name) {
      const audio = new Audio(`./assets/audio/${name}.mp3`);

      audio.play();
    }
  }
}

export default CardsGroup;
