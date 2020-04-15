import CardsGroup from './cards-group';
import cardsConfig from './cards-config';

const cardsGroupNames = {
    ACTION_A: 'Action (set A)',
    ACTION_B: 'Action (set B)',
    ANIMAL_A: 'Animal (set A)',
    ANIMAL_B: 'Animal (set B)',
    CLOTHES: 'Clothes',
    EMOTIONS: 'Emotions',
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
        // console.log('startPAGE:', startPage);
        this.applyPageToDOM(startPage);

    }


    generateCardGroups() {
        const cardsGroups = [
            new CardsGroup(cardsGroupNames.ACTION_A, cardsConfig[cardsGroupNames.ACTION_A]),
            new CardsGroup(cardsGroupNames.ACTION_B, cardsConfig[cardsGroupNames.ACTION_B]),
            new CardsGroup(cardsGroupNames.ANIMAL_A, cardsConfig[cardsGroupNames.ANIMAL_A]),
            new CardsGroup(cardsGroupNames.ANIMAL_B, cardsConfig[cardsGroupNames.ANIMAL_B]),
            new CardsGroup(cardsGroupNames.CLOTHES, cardsConfig[cardsGroupNames.CLOTHES]),
            new CardsGroup(cardsGroupNames.EMOTIONS, cardsConfig[cardsGroupNames.EMOTIONS]),
        ]
        // console.log(`cardsConfig['Action (set A)']::`, cardsConfig[cardsGroupNames.ACTION_A]);
        //  console.log('generateCardGroups_cardsGroup:', cardsGroups);
        return cardsGroups;
    }


    getMainPage() {
        let mainPage = document.createElement('div');
        console.log('cardsGroup,getMainPage:', this.cardsGroups);
        this.cardsGroups.forEach((el) => {
            let domTitleCard = el.createDomTitleCard();
            domTitleCard.addEventListener('click', (event) => {
                let activeMainCardId = event.target.id;
                console.log('eventTarget', activeMainCardId);
                this.selectCardGroup(activeMainCardId);

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
        let categoryPage = document.createElement('div');
        // console.log('activeMainCardId', mainCardId);
        let cardGroup = this.cardsGroups.find(el => el.name === mainCardId);
        //  console.log('cardGroups',this.cardsGroups[1].name);
        console.log('cardGroupsZZ', cardGroup.cardsConfig);
        //    let domCards =  cardGroup.createDOMCards().createCard();
        // console.log('DOMcardsXXXXXXXXXXX', domCards);
        //  

        cardGroup.cardsConfig.forEach((el) => {
            console.log('el', el);
            // let domCards = el.createDOMCards();
        });
        // categoryPage.appendChild(domCards);
        //this.applyPageToDOM(categoryPage);

        //return categoryPage;

    }


    applyPageToDOM(generatedDivs) {
        this.clearPage();
        document.getElementById('mainContainer').appendChild(generatedDivs);

    }
}

export default CardsContainer;