import menu from './menu.json';
import menuTemplate from './menu-template.hbs';

const menuList = document.querySelector('.js-menu');

const body = document.querySelector('body');

const checkboxInput = document.querySelector('.theme-switch__toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

checkboxInput.addEventListener('change', checkboxThemeChange);

function checkboxThemeChange(event) {
    const isChecked = event.target.checked;
    
    if (isChecked) {
        body.classList.remove(Theme.LIGHT);
        body.classList.add(Theme.DARK);
        localStorage.setItem('theme', Theme.DARK);        
    } else {
        body.classList.remove(Theme.DARK);
        body.classList.add(Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT);        
    }    
}

function currentTheme() {
    if (localStorage.getItem('theme') === Theme.DARK) {
        checkboxInput.checked = true;
        body.classList.add(Theme.DARK);
    }
}
currentTheme();

function createMenuMarkup(menu) {
    return menuTemplate(menu);
}

const menuMarkup = createMenuMarkup(menu);
menuList.insertAdjacentHTML('afterbegin', menuMarkup);