import { addBackgroundCredit } from './img-credit'

const homePageContent = () => {
  const contentContainer = document.getElementById('content');

  const backdrop1 = addBackdrop(contentContainer);
  addTitle(backdrop1);

  const backdrop2 = addBackdrop(contentContainer);
  backdrop2.classList.add('color-backdrop');
  addEnticement(backdrop2);

  const backdrop3 = addBackdrop(contentContainer);
  backdrop3.classList.add('color-backdrop');
  addHours(backdrop3);

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
  title.innerHTML = 'Beltaloda\'s Nutriments';
  parent.appendChild(title);
}

const addEnticement = (parent) => {
  let enticement = document.createElement('p');
  enticement.innerHTML = "A Belter's Paradise! Enjoy the luxurious, green diet of Earth right here in the Belt. The finest and freshest sun grown foods, hard-burned right to our restaurant. Come walk the \"Beltaloda tunnel of light\", of system-wide fame, and have the experience of a lifetime."
  parent.appendChild(enticement);
}

const addHours = (parent) => {
  let hours = document.createElement('p');
  let heading = document.createElement('h2');
  heading.innerHTML = 'Hours';
  hours.innerHTML = 'Sunday: Ceres Hr3 - Hr9' + '<br />' + 
                    'Monday: Ceres Hr4 - Hr7' + '<br />' + 
                    'Tuesday: Ceres Hr4 - Hr7' + '<br />' + 
                    'Wednesday: Ceres Hr3 - Hr5' + '<br />' + 
                    'Thursday: Ceres Hr4 - Hr7' + '<br />' + 
                    'Friday: Ceres Hr1 - Hr9' + '<br />' + 
                    'Saturday: Ceres Hr1 - Hr9' + '<br />';
  parent.appendChild(heading);
  parent.appendChild(hours); 
}

export { homePageContent};