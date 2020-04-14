import cardsConfig from "./cards-config";

class CardsGroup {
	constructor(name, cardsConfig) {
		this.name = name;
		this.cardsConfig = cardsConfig;
	}

	createDOMCards() {
		const cardsGroup = document.createElement('div');
		const cardsGroupImg = document.createElement('img');
		const cardImgSrc = `./assets/${cardsConfig.image}`;


		cardsGroup.innerHTML = name;
		cardsGroupImg.src = cardImgSrc;
		cardsGroup.classList.add('cards-group');
		cardsGroup.classList.add('card');
		cardsGroup.appendChild(cardsGroupImg)
		//document.getElementById('mainContainer').appendChild(cardsGroup);
	}
}

export default CardsGroup;