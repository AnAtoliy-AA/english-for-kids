import cards from '../assets/cards'

const body = document.body;

function createHeader() {
  const navigationMenu = document.createElement('ul');
  //const navigationItem = document.createElement('li');

  body.appendChild(navigationMenu);
 // navigationMenu.appendChild(navigationItem);

  console.log(cards[0].length);
  for (let i=0; i < cards[0].length; i++) {
    const navigationItem = document.createElement('li');
    const cCard = cards[0][i];

    navigationItem.innerHTML = cCard;
    navigationItem.classList.add('navigation-item');
    console.log(cCard);

    navigationMenu.appendChild(navigationItem);
  }

}

export default createHeader;