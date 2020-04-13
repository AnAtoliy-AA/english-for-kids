import cards from '../assets/cards'

class Card {
    constructor() {
        this.ctreateCard();
    }



    ctreateCard() {
        for (let i = 1; i < cards.length; i++) {
            const cardCategory = document.createElement('div');
            const mainContainer = document.getElementById('container');
            const cCard = cards[i];

            cardCategory.id = cards[0][i - 1];
            cardCategory.classList.add('card-category');
            mainContainer.appendChild(cardCategory);
            // console.log('card',cCard);

            for (let k = 0; k < cCard.length; k++) {
                const cardContainer = document.createElement('div');
                // const cardImage = document.createElement('img');
                const cardImgUrl = `url(./assets/${cCard[k].image})`;
                const cardFront = document.createElement('div');
                const cardBack = document.createElement('div');

                cardFront.innerHTML = cCard[k].word;
                cardBack.innerHTML = cCard[k].translation;
                cardFront.classList.add('font-face');
                cardBack.classList.add('back-face');
                cardBack.classList.add('hidden');

                // console.log('cardIMGurl', cardImgUrl);
                cardFront.style.backgroundImage = cardImgUrl;
                cardBack.style.backgroundImage = cardImgUrl;
                // cardItem.style.backgroundImage = 'url(./assets/img/angry.jpg)';
                // cardItem.style.background = 'red';
                cardContainer.classList.add('card');

                //cardContainer.classList.add('hidden');
                cardContainer.appendChild(cardFront);
                cardContainer.appendChild(cardBack);
                //console.log('IMG', (`../assets/${cCard[k].image}`));
                mainContainer.appendChild(cardContainer);
                //  cardItem.appendChild(cardImage);
                //  console.log('image', cCard[k].image);
            }
        }
    }
}

export default Card;