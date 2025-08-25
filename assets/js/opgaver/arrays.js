/* arrays */

//Opgave 1
const myExtras = []; /*din array her*/

function addExtra(extra) {
  myExtras.push(extra);
  updateExtras();
}

function updateExtras() {
  let html = '';
  myExtras.forEach(function (extra) {
    html += `<li>${extra}</li>`;
  });
  myExtrasListElement.innerHTML = html;
}

// opgave 2 console.logs

// Byg videre på opgave 1.
// Du skal lave en dropdown, der inderholder de valg brugeren har taget. hvis man vælger fra denne nye dropdown, fjerner man det valgte element.
