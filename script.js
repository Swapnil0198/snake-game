const board = document.getElementById('gameBoard');
const scoreDisplay = document.getElementById('score');
const rows = 20;
const cols = 20;

let snake = [{ x: 10, y: 10 }];
let food = { x: 5, y: 5 };
let direction = 'RIGHT';
let score = 0;
let gameInterval;

// Create grid cells
function createBoard() {
  board.innerHTML = '';
  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    board.appendChild(cell);
  }
}

// Draw snake and food
function draw() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => cell.className = 'cell');

  snake.forEach(segment => {
    const index = segment.y * cols + segment.x;
    cells[index].classList.add('snake');
  });

  const foodIndex = food.y * cols + food.x;
  cells[foodIndex].classList.add('food');
}

// Move snake
function move() {
  const head = { ...snake[0] };

  if (direction === 'UP') head.y--;
  if (direction === 'DOWN') head.y++;
  if (direction === 'LEFT') head.x--;
  if (direction === 'RIGHT') head.x++;

  // Check collision
  if (
    head.x < 0 || head.x >= cols ||
    head.y < 0 || head.y >= rows ||
    snake.some(segment => segment.x === head.x && segment.y === head.y)
  ) {
    clearInterval(gameInterval);
    alert('Game Over! 🐍 Final Score: ' + score);
    location.reload();
    return;
  }

  snake.unshift(head);

  // Check food
  if (head.x === food.x && head.y === food.y) {
    score += 10;
    scoreDisplay.textContent = 'Score: ' + score;
    placeFood();
  } else {
    snake.pop();
  }

  draw();
}

// Place food
function placeFood() {
  food = {
    x: Math.floor(Math.random() * cols),
    y: Math.floor(Math.random() * rows)
  };
}

// Keyboard control
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowUp' && direction !== 'DOWN') direction = 'UP';
  if (e.key === 'ArrowDown' && direction !== 'UP') direction = 'DOWN';
  if (e.key === 'ArrowLeft' && direction !== 'RIGHT') direction = 'LEFT';
  if (e.key === 'ArrowRight' && direction !== 'LEFT') direction = 'RIGHT';
});

// Initialize game
function startGame() {
  createBoard();
  draw();
  gameInterval = setInterval(move, 150);
}

startGame();
