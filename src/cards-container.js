import CardsGroup from './cards-group';
import cardsConfig from './cards-config';

class CardsContainer {
    constructor() {
        this.cardGroups = this.generateCardGroups();

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
            new CardsGroup(cardsGroupNames.ACTION_2, cardsConfig[cardsGroupNames.ACTION_2]),
            new CardsGroup(cardsGroupNames.ACTION_3, cardsConfig[cardsGroupNames.ACTION_3]),
            new CardsGroup(cardsGroupNames.ACTION_4, cardsConfig[cardsGroupNames.ACTION_4]),
            new CardsGroup(cardsGroupNames.ACTION_5, cardsConfig[cardsGroupNames.ACTION_5]),
            new CardsGroup(cardsGroupNames.ACTION_6, cardsConfig[cardsGroupNames.ACTION_6]),
        ]
    }

    getMainPage() {
        this.cardsGroups.forEach((el) => {
            document.getElementById('mainContainer').appendChild(el);
        });
    }
        clearPage() {

        }

    //     selectCardGroup (id) {

    //         let cardGroup = this.cardGroups.find(el => el.id === id);

    //         let domCards =  cardGroup.createDOMCards();

    //         this.applyPageToDOM(domCards);

    //    }


       applyPageToDOM(generatedDivs) {
           this.clearPage();
           conatiner.appendClild(generatedDivs);

       }
}

export default CardsContainer;