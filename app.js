// TODO optimize the shit out of it

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

function enableParaEvents() {
  printOutput('Enabling Paragraph events');
  document.querySelectorAll('p').forEach((p) => {
    p.addEventListener('click', handleParaClick);
  });
}
function disableParaEvents() {
  printOutput('Disabling Paragraph events');
  document.querySelectorAll('p').forEach((p) => {
    p.removeEventListener('click', handleParaClick);
  });
}

function enableBodyEvents() {
  printOutput('Enabling Body events');
  document.body.addEventListener('click', handleBodyClick);
}
function disableBodyEvents() {
  printOutput('Disabling Body events');
  document.body.removeEventListener('click', handleBodyClick);
}

document
  .querySelector('#bodyEventsEnable')
  .addEventListener('click', enableBodyEvents);
document
  .querySelector('#bodyEventsDisable')
  .addEventListener('click', disableBodyEvents);
document
  .querySelector('#paraEventsEnable')
  .addEventListener('click', enableParaEvents);
document
  .querySelector('#paraEventsDisable')
  .addEventListener('click', disableParaEvents);
