import CardsGroup from './cards-group';
import cardsConfig from './cards-config';

const cardsGroupNames = {
    ACTION_1: 'Action (set A)',
    ACTION_2: 'Action (set B)',
    ACTION_3: 'Animal (set A)',
    ACTION_4: 'Animal (set A)',
    ACTION_5: 'Clothes',
    ACTION_6: 'Emotions',
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
    }

   
    generateCardGroups() {
        const cardsGroups = [
            new CardsGroup(cardsGroupNames.ACTION_1, cardsConfig[cardsGroupNames.ACTION_1]),
           // new CardsGroup(cardsGroupNames.ACTION_2, cardsConfig[cardsGroupNames.ACTION_1]),
            // new CardsGroup(cardsGroupNames.ACTION_3, cardsConfig[cardsGroupNames.ACTION_3]),
            // new CardsGroup(cardsGroupNames.ACTION_4, cardsConfig[cardsGroupNames.ACTION_4]),
            // new CardsGroup(cardsGroupNames.ACTION_5, cardsConfig[cardsGroupNames.ACTION_5]),
            // new CardsGroup(cardsGroupNames.ACTION_6, cardsConfig[cardsGroupNames.ACTION_6]),
        ]
        console.log(`cardsConfig['Action (set A)']::`,cardsConfig[cardsGroupNames.ACTION_1]);
        console.log('generateCardGroups_cardsGroup:',cardsGroups);
        return cardsGroups;
    }


    getMainPage() {
        console.log('cardsGroup,getMainPage:',this.cardsGroups);
        this.cardsGroups.forEach((el) => {
            document.getElementById('mainContainer').appendChild(el.createDOMCards());
        });
    }
        clearPage() {
           let element = document.getElementById('mainContainer');
            while (element.firstChild) {
              element.removeChild(element.firstChild);
            }
        }

    //     selectCardGroup (id) {

    //         let cardGroup = this.cardGroups.find(el => el.id === id);

    //         let domCards =  cardGroup.createDOMCards();

    //         this.applyPageToDOM(domCards);

    //    }


       applyPageToDOM(generatedDivs) {
           this.clearPage();
           document.getElementById('mainContainer').appendClild(generatedDivs);

       }
}

export default CardsContainer;