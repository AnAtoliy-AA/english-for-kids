//import cards from '../assets/cards';

function changeCardCategories() {
    //const domCards = document.querySelectorAll('.navigation-item');
    const cardsGroup = document.querySelectorAll('.cards-group');
    const cardCategory = document.querySelectorAll('.card-category');


    cardsGroup.forEach((e) => {
        e.addEventListener('click', (event) => {
            console.log('domCards', event.target.innerHTML);
            // event.target.innerHTML === ;
            console.log('cardCategory', cardCategory);
            const activeCardCategory = cardCategory.find((el) => el.id == event.target.innerHTML);
            
            console.log('activeCardCategory', activeCardCategory);
            if (activeCardCategory) {
                activeCardCategory.classList.remove('hidden');
            }
        })
    })

}

export default changeCardCategories;