
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
        cardContainer.classList.add('main-container');
        cardContainer.id = 'container';
    }

    ctreateCardsGroup() {
        for (let i = 1; i < cards.length; i++) {
            const cardsGroup = document.createElement('div');
            const cCard = cards[0][i - 1];
            //  const cardImgUrl = `url(./assets/${cards[i][1].image})`;
            const cardImgSrc = `./assets/${cards[i][1].image}`;
            const cardsGroupImg = document.createElement('img');

            console.log('cards.length', cards.length);

            cardsGroup.innerHTML = cCard;

            //cardsGroup.id = cards[0][i - 1];
            cardsGroup.classList.add('cards-group');
            cardsGroupImg.src = cardImgSrc;
            cardsGroup.classList.add('card');
            //  cardsGroupImg.style.backgroundImage = cardImgUrl;
            cardsGroup.appendChild(cardsGroupImg)
            document.getElementById('container').appendChild(cardsGroup);
        }
    }
}

export default CardsGroup;