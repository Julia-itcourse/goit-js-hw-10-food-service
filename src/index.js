import './styles.css';
import menu from './menu.json';
import itemTemplate from './templates/item.hbs';
import allItemsTemplate from './templates/allitems.hbs';
const menuList = document.querySelector('.js-menu');

//*Генерация каждого элемента отдельно

// const item = itemTemplate(menu);
// menuList.insertAdjacentHTML('afterbegin', item);

//*Генерация всех элементов сразу

function generateMenu(menu) {
  const item = menu.map(menuItem => allItemsTemplate(menuItem)).join('');
  menuList.insertAdjacentHTML('afterbegin', item);
}
generateMenu(menu);

//* Переключение темы

const checkBox = document.querySelector('.js-switch-input');
const body = document.querySelector('body');

checkBox.addEventListener('click', () => {
  if (checkBox.checked) {
    body.classList.add('dark-theme');
    saveData('isChecked', true);
  } else {
    body.classList.remove('dark-theme');
    saveData('isChecked', false);
  }
});

checkBox.checked = localStorage.getItem('isChecked') === 'true';
checkBox.checked
  ? body.classList.add('dark-theme')
  : body.classList.remove('dark-theme');

let saveData = (key, data) => {
  localStorage.setItem(key, data);
};
