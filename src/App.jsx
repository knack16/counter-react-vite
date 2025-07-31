import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [max, setMax] = useState(null);
  const [min, setMin] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(min);
  }, [min]);

  const validateRange = (newMin, newMax) => {
    if (newMin >= newMax) {
      setError("Minimum value must be less than maximum value.");
      return false;
    }
    setError("");
    return true;
  };

  const handleIncrease = () => {
    if (count >= max) {
      setText("Maximum count reached! Please update the max count below.");
      return;
    }
    setCount((prev) => prev + 1);
    setText("");
  };

  const handleDecrease = () => {
    if (count <= min) {
      setText("Minimum count reached! Please update the min count below.");
      return;
    }
    setCount((prev) => prev - 1);
    setText("");
  };

  const handleReset = () => {
    setCount(min);
    setText("");
  };

  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      if (!validateRange(min, value)) return;
      setMax(value);
    }
  };

  const handleMinChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      if (!validateRange(value, max)) return;
      setMin(value);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-4 bg-gray-50 text-gray-800">
      <div className="flex items-center gap-4">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="h-12 w-12" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="h-12 w-12" alt="React logo" />
        </a>
      </div>

      <h1 className="text-2xl font-bold">Vite + React Counter</h1>

      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
      >
        Count is {count}
      </button>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleIncrease}
          className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700 transition"
        >
          Increase
        </button>
        <button
          onClick={handleDecrease}
          className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700 transition"
        >
          Decrease
        </button>
        <button
          onClick={handleReset}
          className="rounded bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600 transition"
        >
          Reset
        </button>
      </div>

      <p
        className={`max-w-md break-words px-2 text-center text-sm ${
          text ? "text-red-600 font-medium" : "text-gray-600"
        }`}
      >
        {text || "Use the buttons above to adjust the count."}
      </p>

      {error && (
        <p className="text-red-500 text-sm font-semibold">{error}</p>
      )}

      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:gap-8">
        <div className="flex flex-col gap-1">
          <label htmlFor="maxCount" className="text-sm font-medium text-gray-700">
            Set Max Count
          </label>
          <input
            id="maxCount"
            type="number"
            value={max}
            onChange={handleMaxChange}
            className="w-32 rounded border border-gray-300 px-2 py-1 text-sm focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="minCount" className="text-sm font-medium text-gray-700">
            Set Min Count
          </label>
          <input
            id="minCount"
            type="number"
            value={min}
            onChange={handleMinChange}
            className="w-32 rounded border border-gray-300 px-2 py-1 text-sm focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>
    </main>
  );
}

export default App;
