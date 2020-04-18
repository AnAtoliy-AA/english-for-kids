import CardsContainer from './src/cards-container';
import playTrainSwitcher from './src/play-train-switcher';

function runEnglishForKidsApp() {
  const container = new CardsContainer();


  container.generateDomCardContainer();
  document.querySelector('.open-close-btn').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('.overlay').classList.toggle('overlay-open');
    document.getElementById('hamburger-icon').classList.toggle('hamburger-open');
  });

  const mainMenuCategoryLink = document.querySelector('.overlay-content').querySelectorAll('a');

  mainMenuCategoryLink.forEach((el) => {
    el.addEventListener('click', (event) => {
      const id = event.target.innerHTML;

      if (id === 'Main menu') {
        console.log('xcvvvvvvvvvvvvvvv');
        let startPage = container.getMainPage();
        container.applyPageToDOM(startPage);
       // container.createDomTitleCard();
      } else {
        container.openCardCategoryPage(id);
      }
     // mainMenuCategoryLink.
      mainMenuCategoryLink.forEach((el) => {
        el.classList.remove('main-menu-link_active');
      });
      event.target.classList.add('main-menu-link_active');
      document.querySelector('.overlay').classList.toggle('overlay-open');
      document.getElementById('hamburger-icon').classList.toggle('hamburger-open');
    })
  })



  playTrainSwitcher();

}

document.body.onload = runEnglishForKidsApp;
