import CardsContainer from './src/cards-container';
import playTrainSwitcher from './src/play-train-switcher';

function runEnglishForKidsApp() {
  const container = new CardsContainer();

  
  container.generateDomCardContainer();
  // document.querySelectorAll('.open-close-btn').addEventListener('click', (event) => {
  //   event.preventDefault();
  //   document.querySelectorAll('.overlay').classList.toggle('overlay-open');
  //   document.getElementById('hamburger-icon').classList.toggle('hamburger-open');
  // });
  playTrainSwitcher();
}

document.body.onload = runEnglishForKidsApp;