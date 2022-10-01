const addBackgroundCredit = (parent) => {
  let bgCredit = document.createElement('p');
  bgCredit.classList.add('img-credit');
  let authorLink = document.createElement('a');
  authorLink.setAttribute('href', 'https://unsplash.com/@nvte?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText');
  authorLink.textContent = 'Nathan Duck';
  let imageLink = document.createElement('a');
  imageLink.setAttribute('href', 'https://unsplash.com/s/photos/sci-fi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText')
  imageLink.textContent = 'Unsplash'
  bgCredit.innerHTML = 'Background image by ';
  bgCredit.appendChild(authorLink);
  bgCredit.innerHTML += ' on '
  bgCredit.appendChild(imageLink);
  parent.appendChild(bgCredit);
}

const addFoodCredit = (parent) => {
  let credit = document.createElement('p');
  credit.classList.add('img-credit');
  let unsplashLink = document.createElement('a');
  unsplashLink.setAttribute('href', 'https://unsplash.com/');
  unsplashLink.textContent = 'Unsplash';

  let pexelLink = document.createElement('a');
  pexelLink.setAttribute('href', 'https://www.pexels.com');
  pexelLink.textContent = 'Pexels';

  credit.innerHTML = 'Food images taken from ';
  credit.appendChild(unsplashLink);
  credit.innerHTML += ' and '
  credit.appendChild(pexelLink);
  parent.appendChild(credit);
}

export { addFoodCredit, addBackgroundCredit }