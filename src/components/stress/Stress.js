import React, { useState, useEffect } from "react";

const ROWS = 36;
const COLS = 60;
const CELL_SIZE = 16;
const INITIAL_SNAKE = [
  [10, 10],
  [10, 11],
  [10, 12],
];
const INITIAL_DIRECTION = "RIGHT";

const GRID_WIDTH = CELL_SIZE * COLS;
const GRID_HEIGHT = CELL_SIZE * ROWS;

export const Stress = ({ setTitle }) => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  setTitle("🐍 Stressssssed? 🐍");

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case "ArrowUp":
          if (direction !== "DOWN") setDirection("UP");
          break;
        case "ArrowDown":
          if (direction !== "UP") setDirection("DOWN");
          break;
        case "ArrowLeft":
          if (direction !== "RIGHT") setDirection("LEFT");
          break;
        case "ArrowRight":
          if (direction !== "LEFT") setDirection("RIGHT");
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [direction]);

  useEffect(() => {
    setFood(generateFood());
  }, []);

  useEffect(() => {
    const handleGameOver = () => {
      setIsGameOver(true);
    };

    if (isCollidingWithWall(snake[0]) || isCollidingWithItself(snake)) {
      handleGameOver();
    } else {
      const timeoutId = setTimeout(moveSnake, 150);
      return () => clearTimeout(timeoutId);
    }
  }, [snake]);

  useEffect(() => {
    const handleFoodEaten = () => {
      setScore(score + 1);
      setFood(generateFood());
      growSnake();
    };

    if (isCollidingWithFood(snake[0])) {
      handleFoodEaten();
    }
  }, [snake, score]);

  const moveSnake = () => {
    if (!isGameOver) {
      const newHead = calculateNewHead();
      const newSnake = [...snake];
      newSnake.pop();
      newSnake.unshift(newHead);
      setSnake(newSnake);
    }
  };

  const calculateNewHead = () => {
    const [headX, headY] = snake[0];
    let newHead = [headX, headY];
    switch (direction) {
      case "UP":
        newHead = [headX, (headY - 1 + ROWS) % ROWS];
        break;
      case "DOWN":
        newHead = [headX, (headY + 1) % ROWS];
        break;
      case "LEFT":
        newHead = [(headX - 1 + COLS) % COLS, headY];
        break;
      case "RIGHT":
        newHead = [(headX + 1) % COLS, headY];
        break;
      default:
        break;
    }
    return newHead;
  };

  const isCollidingWithFood = (position) => {
    return position[0] === food[0] && position[1] === food[1];
  };

  const isCollidingWithWall = ([x, y]) => {
    return x < 0 || y < 0 || x >= COLS || y >= ROWS;
  };

  const isCollidingWithItself = (snake) => {
    const [head, ...body] = snake;
    return body.some(([x, y]) => x === head[0] && y === head[1]);
  };

  const generateFood = () => {
    let foodPosition;
    do {
      foodPosition = [
        Math.floor(Math.random() * COLS),
        Math.floor(Math.random() * ROWS),
      ];
    } while (isCollidingWithItself([...snake, foodPosition]));
    return foodPosition;
  };

  const growSnake = () => {
    const newHead = calculateNewHead();
    const newSnake = [newHead, ...snake];
    setSnake(newSnake);
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${COLS}, ${CELL_SIZE}px)`,
          gridTemplateRows: `repeat(${ROWS}, ${CELL_SIZE}px)`,
          gap: "1px",
          width: `${GRID_WIDTH}px`,
          height: `${GRID_HEIGHT}px`,
        }}
      >
        {snake.map(([x, y], index) => (
          <div
            key={index}
            className="bg-green-500"
            style={{
              gridColumn: `${x + 1}`,
              gridRow: `${y + 1}`,
            }}
          />
        ))}
        <div
          className="bg-red-500"
          style={{
            gridColumn: `${food[0] + 1}`,
            gridRow: `${food[1] + 1}`,
          }}
        />
        <div className="absolute top-0 right-0 m-4 text-xl text-white">
          Score: {score}
        </div>
        {isGameOver && (
          <div
            className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-red-500 bg-gray-800 bg-opacity-75"
            style={{ zIndex: 999 }}
          >
            Game Over
          </div>
        )}
      </div>
    </div>
  );
};

export default Stress;
