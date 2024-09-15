const n = 4;
const max = Math.pow(n, 2)
const size = 960;

const table = document.querySelector('#table');

for (let i = 1; i < max + 1; i++) {
  const h = 960 / n;
  const w = 960 / n;
  const childDiv = document.createElement('div');
  childDiv.style.width = w + 'px';
  childDiv.style.height = h + 'px';
  table.appendChild(childDiv);
}

