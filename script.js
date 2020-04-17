import CardsContainer from './src/cards-container';

function runEnglishForKidsApp() {
  const container = new CardsContainer();

  document.querySelectorAll('.open-close-btn').addEventlistner('click', (event) => {
    event.preventDefault();
    document.querySelectorAll('.overlay').toggleClass('overlay-open');
    document.getElementById('#hamburger-icon').toggleClass('hamburger-open');
  });
  container.generateDomCardContainer();
}

document.body.onload = runEnglishForKidsApp;