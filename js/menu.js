import menuTpl from '../src/templates/menu-dishes.hbs';
import menuDishes from './menu.json';

const menuRef = document.querySelector('.js-menu');

function createMenuMarkup(items) {
  return menuTpl(items);
}

menuRef.insertAdjacentHTML('beforeend', createMenuMarkup(menuDishes));
// console.log(menuTpl);





