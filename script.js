// import createHeader from './src/create-header'
// import createCardContainer from './src/create-card-container'
// import changeCardCategories from './src/change-card-categories';

import CardsGroup from "./src/cards-group";

// function runEnglishForKidsApp() {
//    const mainContainer =  document.createElement('div');
//    mainContainer.classList.add('main-container');
//    document.body.appendChild(mainContainer);
//   createHeader();
//   createCardContainer();
//   changeCardCategories();

// }

function runEnglishForKidsApp() {
  const cardContainer = new CardsGroup();
  
}

document.body.onload = runEnglishForKidsApp;