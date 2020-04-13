
import cards from '../assets/cards'

class CardsGroup {
    constructor() {
        this.createCardContainer();
        this.ctreateCardsGroup();
    }

    createCardContainer() {
        const { body } = document;
        const cardContainer = document.createElement('div');

        body.appendChild(cardContainer);
        cardContainer.classList.add('card-container');
        cardContainer.id = 'cardContainer';
    }

    ctreateCardsGroup() {
        for (let i = 1; i < cards.length; i++) {
            const cardsGroup = document.createElement('div');
            const cCard = cards[0][i-1];
            const cardImgUrl = `url(./assets/${cards[i][1].image})`;
            
            console.log('cards.length', cards.length);

            cardsGroup.innerHTML = cCard;

            cardsGroup.id = cards[0][i - 1];
            cardsGroup.classList.add('card-category');
            cardsGroup.classList.add('card');
            cardsGroup.style.backgroundImage = cardImgUrl;
            document.getElementById('cardContainer').appendChild(cardsGroup);
        }
    }
}

export default CardsGroup;