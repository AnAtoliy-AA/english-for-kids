function playTrainSwitcher() {
    document.getElementById('gameOnToggler')
        .querySelectorAll('.toggle.btn')
        .forEach(btn => {
            btn.addEventListener('click', (event) => {
                const cardsGroups = document.querySelectorAll('.cards-group');
                const cardsText = document.querySelectorAll('.card-text');
                const rotateImg = document.querySelectorAll('.rotate');

                console.log('EVENTEE', event.target);
                console.log('cardsGroups', cardsGroups);
                console.log('cardsText', cardsText);
                if (cardsGroups) {
                    console.log('cardsGroupsXX', cardsGroups);
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
            });

        })
}

export default playTrainSwitcher;