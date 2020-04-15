import Card from './card';
class CardsGroup {
	constructor(name, cardsConfig) {
		this.name = name;
		this.cardsConfig = cardsConfig;
		//this.createDOMCards();
	}

	createDomTitleCard() {
		const cardsGroup = document.createElement('div');
		const cardsGroupImg = document.createElement('img');
		const cardImgSrc = `./assets/${this.cardsConfig[0].image}`;

		//	console.log('this.cardsConfig',this.cardsConfig[1]['word']);
		//    console.log('cardImgSrc',cardImgSrc);
		//    console.log('createDomCards',this.name);
		cardsGroup.innerHTML = this.name;
		cardsGroupImg.src = cardImgSrc;
		cardsGroup.id = this.name;
		cardsGroup.classList.add('cards-group');
		cardsGroup.classList.add('card');
		cardsGroup.appendChild(cardsGroupImg);
		//document.getElementById('mainContainer').appendChild(cardsGroup);
		//	console.log('CARDS_GROUP',cardsGroup);
		//.......
		return cardsGroup;
	}
	//	createDOMCards(){
	generateCards() {
		const cards = [
			new Card(this.cardsConfig[0]),
			new Card(this.cardsConfig[1]),
			new Card(this.cardsConfig[2]),
			new Card(this.cardsConfig[3]),
			new Card(this.cardsConfig[4]),
			new Card(this.cardsConfig[5]),
			new Card(this.cardsConfig[6]),
			new Card(this.cardsConfig[7]),
		]
		console.log('cards',cards);

		return cards;
	}
	// createDOMCards() {

	// }
}

export default CardsGroup;