const container = document.querySelector('.container');
const gridReset = document.querySelector('.gridReset');

let rows = 16;
let columns = 16;
let gridSize = null;

if (rows === 16 && columns === 16) {
  gridSize = new Array(rows * columns);
}

function reseter(gridSize) {
  for (let i = 0; i < gridSize.length; i++) {
    container.removeChild(gridSize[i]);
  }
}

gridSetter(rows, columns, gridSize);

function gridSetter(rows, columns, gridSize) {
  for (let i = 0; i < gridSize.length; i++) {
    gridSize[i] = document.createElement('div');
    container.appendChild(gridSize[i]);
  }

  function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let bgColor = `rgb(${r}, ${g}, ${b});`;
    return bgColor;
  }

  gridSize.forEach((div) => {
    div.addEventListener('mouseenter', function hoverEffect() {
      let color = randomColor();

      div.setAttribute('style', `background-Color: ${color};`);

      // div.style.background = color;
    });
  });

  container.setAttribute(
    'style',
    `grid-template-columns: repeat(${columns}, 1fr); grid-template-rows: repeat(${rows}, 1fr);`
  );

  for (let y = 0; y < gridSize.length; y++) {
    gridSize[y].classList.add('gridItem');
  }
}

gridReset.addEventListener('click', function gridReseter() {
  reseter(gridSize);
  let rows = prompt('How many rows would you like?');
  let columns = prompt('How many columns would you like?');
  gridSize = null;
  container.setAttribute(
    'style',
    'grid-template-columns: 0; grid-template-rows:0;'
  );
  gridSize = new Array(rows * columns);

  gridSize.forEach((div) => {
    div.addEventListener('mouseenter', function hoverEffect() {
      let color = randomColor();

      div.setAttribute('style', `background-Color: white;`);

      // div.style.background = color;
    });
  });

  gridSetter(rows, columns, gridSize);
});
