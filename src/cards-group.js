class CardsGroup {
	constructor(name, cardsConfig) {
		this.name = name;
		this.cardsConfig = cardsConfig;
		//this.createDOMCards();
	}

	createDOMCards() {
		const cardsGroup = document.createElement('div');
		const cardsGroupImg = document.createElement('img');
		const cardImgSrc = `./assets/${this.cardsConfig[0].image}`;

		console.log('this.cardsConfig',this.cardsConfig);
       console.log('cardImgSrc',cardImgSrc);
       console.log('createDomCards',this.name);
		cardsGroup.innerHTML = this.name;
		cardsGroupImg.src = cardImgSrc;
		cardsGroup.classList.add('cards-group');
		cardsGroup.classList.add('card');
		cardsGroup.appendChild(cardsGroupImg)
		//document.getElementById('mainContainer').appendChild(cardsGroup);
		console.log('CARDS_GROUP',cardsGroup);
		//.......
		return cardsGroup; 
	}
}

export default CardsGroup;