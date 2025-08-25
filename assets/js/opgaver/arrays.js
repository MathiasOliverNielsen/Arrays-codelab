/* arrays */

//Opgave 1
const myExtras = []; /*din array her*/
const myExtrasInput = document.getElementById('extraUdstyr');
const myExtrasListElement = document.getElementById('extraList');

function addExtra(extra) {
  myExtras.push(extra);
  updateExtras();
}

function updateExtras() {
  myExtrasListElement.innerHTML = myExtras.map((extra) => `<li>${extra}</li>`).join('');
}

// opgave 2 console.logs
