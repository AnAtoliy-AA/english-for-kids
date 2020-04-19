import CardsGroup from './cards-group';
import cardsConfig from './cards-config';


const cardsGroupNames = {
  ACTION_A: 'Action (set A)',
  ACTION_B: 'Action (set B)',
  ANIMAL_A: 'Animal (set A)',
  ANIMAL_B: 'Animal (set B)',
  CLOTHES: 'Clothes',
  EMOTIONS: 'Emotions',
  FAMILY: 'Family',
  COLORS: 'Colors',
}
class CardsContainer {
  constructor() {
    this.cardsGroups = this.generateCardGroups();
    this.cardsConfig = cardsConfig;
    this.trainMode = true;
  }
  containerToggleGameMode() {
    this.trainMode = !this.trainMode;
  }
  createDOMMainContainer() {
    const { body } = document;
    const cardContainer = document.createElement('div');

    body.appendChild(cardContainer);
    cardContainer.classList.add('main-container');
    cardContainer.id = 'mainContainer';
  }

  generateDomCardContainer() {
    this.createDOMMainContainer();
    let startPage = this.getMainPage();
    this.applyPageToDOM(startPage);
  }


  generateCardGroups() {
    let container = this;
    const cardsGroups = [
      new CardsGroup(cardsGroupNames.ACTION_A, cardsConfig[cardsGroupNames.ACTION_A], container),
      new CardsGroup(cardsGroupNames.ACTION_B, cardsConfig[cardsGroupNames.ACTION_B], container),
      new CardsGroup(cardsGroupNames.ANIMAL_A, cardsConfig[cardsGroupNames.ANIMAL_A], container),
      new CardsGroup(cardsGroupNames.ANIMAL_B, cardsConfig[cardsGroupNames.ANIMAL_B], container),
      new CardsGroup(cardsGroupNames.CLOTHES, cardsConfig[cardsGroupNames.CLOTHES], container),
      new CardsGroup(cardsGroupNames.EMOTIONS, cardsConfig[cardsGroupNames.EMOTIONS], container),
      new CardsGroup(cardsGroupNames.FAMILY, cardsConfig[cardsGroupNames.FAMILY], container),
      new CardsGroup(cardsGroupNames.COLORS, cardsConfig[cardsGroupNames.COLORS], container),
    ]
    return cardsGroups;
  }


  getMainPage() {
    let mainPage = document.createElement('div');
    mainPage.classList.add('cards-group-container');
    this.cardsGroups.forEach((el) => {
      let domTitleCard = el.createDomTitleCard();
      domTitleCard.addEventListener('click', (event) => {
        this.applyDomCardsToMainContainer(event);
      });
      mainPage.appendChild(domTitleCard);
    });
    return mainPage;
  }

  clearPage() {
    let element = document.getElementById('mainContainer');
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  selectCardGroup(mainCardId) {
    let cardGroup = this.cardsGroups.find(el => el.name === mainCardId);
    return cardGroup;
  }

  applyPageToDOM(generatedDivs) {
    this.clearPage();
    document.getElementById('mainContainer').appendChild(generatedDivs);
  }

  applyDomCardsToMainContainer(event) {
    let activeMainCardId = event.target.id;
    this.openCardCategoryPage(activeMainCardId);
  }

  openCardCategoryPage(id) {
    let cardGroup = this.selectCardGroup(id);
    let domCardGroup = cardGroup.createDOMCards();
    this.applyPageToDOM(domCardGroup);
    const buttonPlay = document.querySelector('.button-play');
    buttonPlay.addEventListener('click', () => {
      this.buttonPlayAudioGame(id);
    });
  }

  buttonPlayAudioGame() {
    // const buttonPlay = document.querySelector('.button-play');
    // const starContainer = document.querySelector('.star-container');
    // const starWin = document.createElement('img');
    // const starLoose = document.createElement('img');

    // buttonPlay.innerHTML = 'Repeat';
    // starWin.src = './assets/img/star-win.png';
    // starLoose.src = './assets/img/star-loose.png';
    // starContainer.appendChild(starLoose);
    // starContainer.appendChild(starWin);
  }
}

export default CardsContainer;