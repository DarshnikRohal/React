// App.js
import React, { createContext, useContext, useState } from 'react';

// Create a Theme Context
const ThemeContext = createContext();

// Theme toggler button (consumes context)
const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? '🌙 Dark' : '☀️ Light'} Mode
    </button>
  );
};

// Sibling components sharing input state
const InputField = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="Type something..."
    value={value}
    onChange={(e) => onChange(e.target.value)}
    style={{ padding: '10px', margin: '10px 0' }}
  />
);

const Display = ({ text }) => <p>You typed: <strong>{text}</strong></p>;

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  const [text, setText] = useState('');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          background: theme === 'light' ? '#fff' : '#333',
          color: theme === 'light' ? '#000' : '#fff',
          padding: '30px',
          minHeight: '100vh',
        }}
      >
        <h1>🚀 Day 08 – Context & Lifting State</h1>
        <ThemeToggle />

        <hr />

        <h2>🔼 Shared Input between Siblings</h2>
        <InputField value={text} onChange={setText} />
        <Display text={text} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
