// Write your code here!
const main = document.querySelector('main#main');
main.remove();

const newHeader = document.createElement('h1');
newHeader.setAttribute('id','victory');
newHeader.textContent = 'Dumbo is the champion'