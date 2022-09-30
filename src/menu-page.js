import bloodOrangeHorizon from './pexels-olena-bohovyk-3323682.jpg'

const menuPageContent = () => {
  const contentContainer = document.getElementById('content');

  const backdrop1 = addBackdrop(contentContainer);
  addTitle(backdrop1);

  const backdrop2 = addBackdrop(contentContainer);
  backdrop2.classList.add('menu-subtitle');
  addSubTitle(backdrop2, 'Beverages');

  const backdrop3 = addBackdrop(contentContainer);
  addItem(backdrop3, 'Blood Orange Horizon', bloodOrangeHorizon);
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

const addItem = (parent, itemName, imgPath) => {
  parent.classList.add('menu-item');
  let heading = document.createElement('h3');
  heading.innerHTML = itemName;
  parent.appendChild(heading);
  let imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  let img = document.createElement('img');
  img.setAttribute('src', imgPath);
  imgContainer.appendChild(img)
  parent.appendChild(imgContainer);
}



export { menuPageContent }