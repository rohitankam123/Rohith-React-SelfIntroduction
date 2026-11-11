
import { useState } from "react";
import "./CounterTheme.css";

function CounterTheme() {

  // Counter state
  const [count, setCount] = useState(0);

  // Theme state
  const [darkMode, setDarkMode] = useState(false);

  // Increment function
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Decrement function
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  // Reset function
  const handleReset = () => {
    setCount(0);
  };

  // Theme toggle function
  const handleThemeToggle = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={darkMode ? "app dark" : "app light"}>

      <div className="counter-card">

        <h1>React Counter App</h1>

        <p className="subtitle">
          Manage your counter and switch themes
        </p>

        <div className="counter-display">
          {count}
        </div>

        <div className="counter-buttons">

          <button
            className="increment-btn"
            onClick={handleIncrement}
          >
            Increment (+)
          </button>

          <button
            className="decrement-btn"
            onClick={handleDecrement}
          >
            Decrement (-)
          </button>

          <button
            className="reset-btn"
            onClick={handleReset}
          >
            Reset
          </button>

        </div>

        <div className="theme-section">

          <h2>Theme Settings</h2>

          <p>
            Current Theme: {darkMode ? "Dark Mode" : "Light Mode"}
          </p>

          <button
            className="theme-btn"
            onClick={handleThemeToggle}
          >
            {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default CounterTheme;
