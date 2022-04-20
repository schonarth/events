function printOutput(output) {
  console.log(output);
  const element = document.querySelector('#output') || '';
  element.innerHTML += `<p class='output-entry'>${output}</p>`;
}

function handleParaClick(event) {
  printOutput(`Clicked the ${event.target.id} paragraph`);
}

function handleBodyClick(event) {
  const classNames = !!event.target.className
    ? `.${event.target.className}`
    : '';
  const id = !!event.target.id ? `#${event.target.id}` : '';
  printOutput(`Clicked the body on ${event.target.tagName}${classNames}${id}`);
}

function handleBodyRightClick(event) {
  // Not concerned to prevent context menu here, let it pop

  const classNames = !!event.target.className
    ? `.${event.target.className}`
    : '';
  const id = !!event.target.id ? `#${event.target.id}` : '';
  printOutput(
    `Right-clicked the body on ${event.target.tagName}${classNames}${id}`
  );
}

function enableParaClicks() {
  printOutput('Enabling Paragraph clicks');
  document.querySelectorAll('p').forEach((p) => {
    p.addEventListener('click', handleParaClick);
  });
}
function disableParaClicks() {
  printOutput('Disabling Paragraph clicks');
  document.querySelectorAll('p').forEach((p) => {
    p.removeEventListener('click', handleParaClick);
  });
}

function enableBodyClicks() {
  printOutput('Enabling Body clicks');
  document.body.addEventListener('click', handleBodyClick);
}
function disableBodyClicks() {
  printOutput('Disabling Body clicks');
  document.body.removeEventListener('click', handleBodyClick);
}
function enableBodyRightClicks() {
  printOutput('Enabling Body right-clicks');
  document.body.addEventListener('contextmenu', handleBodyRightClick);
}
function disableBodyRightClicks() {
  printOutput('Disabling Body right-clicks');
  document.body.removeEventListener('contextmenu', handleBodyRightClick);
}

document
  .querySelector('#bodyClicksEnable')
  .addEventListener('click', enableBodyClicks);
document
  .querySelector('#bodyClicksDisable')
  .addEventListener('click', disableBodyClicks);
document
  .querySelector('#bodyRightClicksEnable')
  .addEventListener('click', enableBodyRightClicks);
document
  .querySelector('#bodyRightClicksDisable')
  .addEventListener('click', disableBodyRightClicks);
document
  .querySelector('#paraClicksEnable')
  .addEventListener('click', enableParaClicks);
document
  .querySelector('#paraClicksDisable')
  .addEventListener('click', disableParaClicks);
