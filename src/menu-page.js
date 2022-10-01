import orangeTea from './menu-images/pexels-olena-bohovyk-3323682.jpg'
import oolong from './menu-images/petr-sidorov-DrTXmESWaN8-unsplash.jpg'
import coffee from './menu-images/pexels-anna-pyshniuk-6048537.jpg'
import water from './menu-images/pexels-wagner-soares-1129482.jpg'
import veggieBowl from './menu-images/pexels-polina-tankilevitch-3872373.jpg'
import garbanzoBowl from './menu-images/pexels-deeana-arts-2894651.jpg'
import megaFruit from './menu-images/vd-photography-h4XEpzG4Y-I-unsplash.jpg'
import zuchinni from './menu-images/pexels-dana-tentis-364657.jpg'
import potatoDish from './menu-images/jennifer-burk-1-F5YvloMGA-unsplash.jpg'
import ramen from './menu-images/dianne-cabahug-XHnvXceoxkI-unsplash.jpg'
import clamChowder from './menu-images/do-mee-SH8_JmrsQcw-unsplash.jpg'
import noodleDish from './menu-images/pexels-polina-tankilevitch-5848492.jpg'
import chickenDish from './menu-images/nathan-dumlao-8Uv6eanQWzY-unsplash.jpg'
import salmonDish from './menu-images/casey-lee-awj7sRviVXo-unsplash.jpg'
import { addFoodCredit, addBackgroundCredit } from './img-credit'

const menuPageContent = () => {
  const contentContainer = document.getElementById('content');
  const backdrop1 = addBackdrop(contentContainer);
  addTitle(backdrop1);

  const backdrop2 = addBackdrop(contentContainer);
  backdrop2.classList.add('menu-subtitle');
  addSubTitle(backdrop2, 'Beverages');

  const backdrop3 = addBackdrop(contentContainer);
  addItem(backdrop3, 'Blood Orange Tea', '80 CNY', orangeTea);
  const backdrop4 = addBackdrop(contentContainer);
  addItem(backdrop4, 'Oolong Tea', '70 CNY', oolong);
  const backdrop5 = addBackdrop(contentContainer);
  addItem(backdrop5, 'Coffee Latte', '90 CNY', coffee);
  const backdrop6 = addBackdrop(contentContainer);
  addItem(backdrop6, 'Baikal Stream Water', '300 CNY', water);

  const backdrop7 = addBackdrop(contentContainer);
  backdrop7.classList.add('menu-subtitle');
  addSubTitle(backdrop7, 'Small Dishes');

  const backdrop8 = addBackdrop(contentContainer);
  addItem(backdrop8, 'Quinoa and Veggie Bowl', '240 CNY', veggieBowl);
  const backdrop9 = addBackdrop(contentContainer);
  addItem(backdrop9, 'Garbanzo Bean and Avacado Salad', '240 CNY', garbanzoBowl);
  const backdrop10 = addBackdrop(contentContainer);
  addItem(backdrop10, 'Mega Fruits Plate', '360 CNY', megaFruit);
  const backdrop11 = addBackdrop(contentContainer);
  addItem(backdrop11, 'Zuchinni Cakes', '260 CNY', zuchinni);

  const backdrop12 = addBackdrop(contentContainer);
  backdrop12.classList.add('menu-subtitle');
  addSubTitle(backdrop12, 'Large Dishes');

  const backdrop16 = addBackdrop(contentContainer);
  addItem(backdrop16, 'Honey Pepper Noodles', '380 CNY', noodleDish);
  const backdrop18 = addBackdrop(contentContainer);
  addItem(backdrop18, 'Salmon and Zuchinni', '500 CNY', salmonDish);
  const backdrop13 = addBackdrop(contentContainer);
  addItem(backdrop13, 'Smoked Potato Nut', '420 CNY', potatoDish);
  const backdrop14 = addBackdrop(contentContainer);
  addItem(backdrop14, 'Clam Chowder Soup', '420 CNY', clamChowder);
  const backdrop15 = addBackdrop(contentContainer);
  addItem(backdrop15, 'Ramen', '460 CNY', ramen);
  const backdrop17 = addBackdrop(contentContainer);
  addItem(backdrop17, 'BBQ Chicken and Kale', '500 CNY', chickenDish);

  addFoodCredit(contentContainer);
  addBackgroundCredit(contentContainer);
}

const addBackdrop = (parent) => {
  let backdrop = document.createElement('div');
  backdrop.classList.add('backdrop');
  parent.appendChild(backdrop);
  return backdrop 
}

const addTitle = (parent) => {
  let title = document.createElement('h1');
  title.innerHTML = 'Menu';
  parent.appendChild(title);
}

const addSubTitle = (parent, subtitle) => {
  let title = document.createElement('h2');
  title.innerHTML = subtitle;
  parent.appendChild(title);
}

const addItem = (parent, itemName, itemPrice, imgPath) => {
  parent.classList.add('menu-item');
  let heading = document.createElement('h3');
  heading.innerHTML = itemName;
  parent.appendChild(heading);
  let price = document.createElement('p');
  price.innerHTML = itemPrice;
  parent.appendChild(price);
  let imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  let img = document.createElement('img');
  img.setAttribute('src', imgPath);
  imgContainer.appendChild(img)
  parent.appendChild(imgContainer);
}

export { menuPageContent }