//import cards from '../assets/cards';

function changeCardCategories() {
    const domCards = document.querySelectorAll('.navigation-item');
    const cardCategory = document.querySelectorAll('.card-category');

    
    domCards.forEach((e) => {
        e.addEventListener('click', (event) => {
            console.log('domCards', event.target.innerHTML);
           // event.target.innerHTML === ;
           console.log('cardCategory',cardCategory);
           const activeCardCategory = cardCategory.find((el)=> el.id == event.target.innerHTML);

           if (activeCardCategory) {
               activeCardCategory.classList.add('hidden');
           }
        })
    })

}

export default changeCardCategories;