import { homePageContent } from './home-page'
import { menuPageContent } from './menu-page'
import { contactPageContent } from './contact-page'

const contentContainer = document.getElementById('content');
const nav = document.getElementById('navbar');

const clearPage = () => {
  contentContainer.textContent = '';
}

let homeTab = document.createElement('div');
homeTab.textContent = 'Home';
homeTab.addEventListener('click', () => {
  clearPage();
  homePageContent();
})

let menuTab = document.createElement('div');
menuTab.textContent = 'Menu';
menuTab.addEventListener('click', () => {
  clearPage();
  menuPageContent();
})

let contactTab = document.createElement('div');
contactTab.textContent = 'Contact';
contactTab.addEventListener('click', () => {
  clearPage();
  contactPageContent();
})

nav.appendChild(homeTab);
nav.appendChild(menuTab);
nav.appendChild(contactTab);

homePageContent();