// import createHeader from './src/create-header'
// import createCardContainer from './src/create-card-container'
// import changeCardCategories from './src/change-card-categories';

import CardsGroup from "./src/cards-group";
import Card from "./src/card";
import changeCardCategories from "./src/change-card-categories";

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
  const card = new Card;
  changeCardCategories();

}

document.body.onload = runEnglishForKidsApp;