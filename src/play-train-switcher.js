function playTrainSwitcher() {
    document.getElementById('gameOnToggler')
        .querySelectorAll('.toggle.btn')
        .forEach(btn => {
            btn.addEventListener('click', () => {
                const cardsGroups = document.querySelectorAll('.cards-group');
                const cardsText = document.querySelectorAll('.card-text');
                const rotateImg = document.querySelectorAll('.rotate');
                const audioPlayButton = document.querySelector('.button-play');
               // const frontCardImg = document.querySelectorAll('.front-face');


                if (cardsGroups) {
                    cardsGroups.forEach((el) => {
                        el.classList.toggle('cards-group_active');
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
                // if (frontCardImg) {
                //     frontCardImg.forEach((el) => {
                //         event.preventDefault(el);
                //     });
                // }
                if (audioPlayButton) {
                    audioPlayButton.classList.toggle('hidden');
                }
            });
        })
}

export default playTrainSwitcher;