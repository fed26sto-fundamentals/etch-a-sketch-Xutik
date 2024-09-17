let n = 16;
const size = 960;

function createTable(){
  table.innerHTML = '';

  const max = Math.pow(n, 2)

  for (let i = 1; i < max + 1; i++) {
    const h = 960 / n;
    const w = 960 / n;
    const childDiv = document.createElement('div');
    childDiv.style.width = w + 'px';
    childDiv.style.height = h + 'px';
    childDiv.addEventListener('mouseover', () => {
      childDiv.style.backgroundColor = 'green'
    })
  
    table.appendChild(childDiv);
  }
}

const table = document.querySelector('#table');
const button = document.querySelector('#idbtn');

button.addEventListener('click', () => {
  n = prompt("Type number (<100) to create a new table");
  n = parseInt(n);
  createTable();
});

createTable();