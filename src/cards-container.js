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
    // this.changeTrainToPlay();
  }


  generateCardGroups() {
    const cardsGroups = [
      new CardsGroup(cardsGroupNames.ACTION_A, cardsConfig[cardsGroupNames.ACTION_A]),
      new CardsGroup(cardsGroupNames.ACTION_B, cardsConfig[cardsGroupNames.ACTION_B]),
      new CardsGroup(cardsGroupNames.ANIMAL_A, cardsConfig[cardsGroupNames.ANIMAL_A]),
      new CardsGroup(cardsGroupNames.ANIMAL_B, cardsConfig[cardsGroupNames.ANIMAL_B]),
      new CardsGroup(cardsGroupNames.CLOTHES, cardsConfig[cardsGroupNames.CLOTHES]),
      new CardsGroup(cardsGroupNames.EMOTIONS, cardsConfig[cardsGroupNames.EMOTIONS]),
      new CardsGroup(cardsGroupNames.FAMILY, cardsConfig[cardsGroupNames.FAMILY]),
      new CardsGroup(cardsGroupNames.COLORS, cardsConfig[cardsGroupNames.COLORS]),
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
    // let cardGroup = this.selectCardGroup(activeMainCardId);
    // let domCardGroup = cardGroup.createDOMCards();
    // this.applyPageToDOM(domCardGroup);
    this.openCardCategoryPage(activeMainCardId);
  }

  openCardCategoryPage(id) {
    let cardGroup = this.selectCardGroup(id);
    let domCardGroup = cardGroup.createDOMCards();
    this.applyPageToDOM(domCardGroup);
  }
  // changeTrainToPlay() {
  //   let mainToggle = document.querySelectorAll('.toggle-group');
    
  //   console.log('TOGGLE', mainToggle);
  //   mainToggle.addEventListener('click', (event) => {
  //     console.log('EVENT', event.target);
  //   });
  // }
}

export default CardsContainer;