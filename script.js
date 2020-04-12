import createHeader from './src/create-header'
import createCardContainer from './src/create-card-container'
import changeCardCategories from './src/change-card-categories';

function runEnglishForKidsApp() {
   const mainContainer =  document.createElement('div');
   mainContainer.classList.add('main-container');
   document.body.appendChild(mainContainer);
  createHeader();
  createCardContainer();
  changeCardCategories();

}

document.body.onload = runEnglishForKidsApp;