import CardsContainer from './src/cards-container';

function runEnglishForKidsApp() {
  const container = new CardsContainer();
  container.generateDomCardContainer();
}

document.body.onload = runEnglishForKidsApp;