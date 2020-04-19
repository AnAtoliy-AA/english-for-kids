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
    return Object.values(cardsGroupNames).map(k => {
      return new CardsGroup(k, cardsConfig[k], container);
    });
  }


  getMainPage() {
    let mainPage = document.createElement('div');
    mainPage.classList.add('cards-group-container');
    this.cardsGroups.forEach((el) => {
      let domTitleCard = el.createDomTitleCard();
      domTitleCard.addEventListener('click', (event) => {
        this.applyDomCardsToMainContainer(event);
      });
      if (!this.trainMode) {
        domTitleCard.classList.add('cards-group_active');
      }
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
  }
}

export default CardsContainer;