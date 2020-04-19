import CardsContainer from './src/cards-container';
import playTrainSwitcher from './src/play-train-switcher';
import mainMenu from './src/main-menu';


function runEnglishForKidsApp() {
  const container = new CardsContainer();

  container.generateDomCardContainer();
  mainMenu(container);
  playTrainSwitcher(container);
}

document.body.onload = runEnglishForKidsApp;
