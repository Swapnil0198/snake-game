function move() {
  const head = { ...snake[0] };

  // Move head based on direction
  if (direction === 'UP') head.y--;
  if (direction === 'DOWN') head.y++;
  if (direction === 'LEFT') head.x--;
  if (direction === 'RIGHT') head.x++;

  // 🟢 Infinite wall logic — wrap around
  if (head.x < 0) head.x = cols - 1;
  if (head.x >= cols) head.x = 0;
  if (head.y < 0) head.y = rows - 1;
  if (head.y >= rows) head.y = 0;

  // Check self-collision
  if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
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
