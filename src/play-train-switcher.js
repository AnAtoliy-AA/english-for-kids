function playTrainSwitcher(container) {
  document.getElementById('gameOnToggler')
    .querySelectorAll('.toggle.btn')
    .forEach(btn => {
      btn.addEventListener('click', () => {
        const cardsGroups = document.querySelectorAll('.cards-group');
        const cardsText = document.querySelectorAll('.card-text');
        const cards = document.querySelectorAll('.card');
        const rotateImg = document.querySelectorAll('.rotate');
        const audioPlayButton = document.querySelector('.button-play');
        const starContainer = document.querySelector('.star-container');
        const frontFaceCard = document.querySelectorAll('.front-face');

        container.containerToggleGameMode();

        if (cardsGroups) {
          cardsGroups.forEach((el) => {
            el.classList.toggle('cards-group_active');
          });
        }
        if (cards) {
          cards.forEach((el) => {
            el.classList.toggle('card-cover');
          });
        }
        if (frontFaceCard) {
          frontFaceCard.forEach((el) => {
            el.classList.remove('inactive');
          });
        }
        if (cardsText) {
          cardsText.forEach((el) => {
            el.classList.toggle('hidden');
          });
        }
        if (rotateImg) {
          rotateImg.forEach((el) => {
            el.classList.toggle('hidden');
          });
        }

        if (starContainer) {
          while (starContainer.firstChild) {
            starContainer.removeChild(starContainer.firstChild);
          }
        }

        if (audioPlayButton) {
          audioPlayButton.classList.toggle('hidden');
        }
      });
    })
}

export default playTrainSwitcher;