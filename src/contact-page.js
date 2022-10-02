const contactPageContent = () => {
  const contentContainer = document.getElementById('content');

  const backdrop1 = addBackdrop(contentContainer);
  addTitle(backdrop1);
  const backdrop2 = addBackdrop(contentContainer);
  backdrop2.classList.add('color-backdrop');
  let para = document.createElement('p');
  para.innerHTML = '<b>From Ceres Station:</b> ' + '<br />' + '12-596' + 
                   '<br /><br />' + '<b>Tight-beam coordinates:</b>' + '<br />' + 
                   '283746.4059937.28475553.2847398 SAU' + '<br /><br />' +
                   'If you\'re off station but within docking range, our host will be glad to communicate with you in real time, regardless of if you plan to dock.';
  para.style.textAlign = 'start';
  backdrop2.appendChild(para); 
}

const addBackdrop = (parent) => {
  let backdrop = document.createElement('div');
  backdrop.classList.add('backdrop');
  parent.appendChild(backdrop);
  return backdrop 
}

const addTitle = (parent) => {
  let title = document.createElement('h1');
  title.innerHTML = 'Contact';
  parent.appendChild(title);
}

export { contactPageContent }