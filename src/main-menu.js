function mainMenu(container) {
  const mainMenu = 'Main menu';

  document.querySelector('.open-close-btn').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('.overlay').classList.toggle('overlay-open');
    document.getElementById('hamburger-icon').classList.toggle('hamburger-open');
  });

  const mainMenuCategoryLink = document.querySelector('.overlay-content').querySelectorAll('a');

  mainMenuCategoryLink.forEach((el) => {
    el.addEventListener('click', (event) => {
      const id = event.target.innerHTML;

      if (id === mainMenu) {
        container.navigateToMainMenu();
      } else {
        container.openCardCategoryPage(id);
      }
      mainMenuCategoryLink.forEach((el) => {
        el.classList.remove('main-menu-link_active');
      });
      event.target.classList.add('main-menu-link_active');
      document.querySelector('.overlay').classList.toggle('overlay-open');
      document.getElementById('hamburger-icon').classList.toggle('hamburger-open');
    })
  })
}

export default mainMenu;