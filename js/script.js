const container = document.querySelector('.container');

let rows = 16;
let columns = 16;

let gridSize = new Array(rows * columns);

for (let i = 0; i < gridSize.length; i++) {
  gridSize[i] = document.createElement('div');
  gridSize[i].classList.add('gridItem');

  // gridSize[i].textContent = `${i}`;

  gridSize[i].textContent = 'grid-cell';
  container.appendChild(gridSize[i]);
}
