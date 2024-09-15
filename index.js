const max = Math.pow(4, 2)


const table = document.querySelector('#table');

// Add 16 divs
for (let i = 1; i < 17; i++) {
  const div = document.createElement('div');
  table.appendChild(div);
}

