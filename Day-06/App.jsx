import React, { Component, useState } from 'react';

// 🔥 Error Boundary (Class Component)
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Caught by Error Boundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}

// 🧱 Functional Component with Inline Styling, Fragments, Children
const Wrapper = ({ children }) => {
  const style = {
    border: '2px solid #4CAF50',
    padding: '16px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9'
  };

  return <div style={style}>{children}</div>;
};

const Greeting = ({ name }) => {
  if (!name) throw new Error("Name is required");
  return <h3>Hello, {name}!</h3>;
};

const Info = () => (
  <>
    <p>This component uses fragments to avoid extra DOM nodes.</p>
    <p>It's clean and semantic!</p>
  </>
);

// 👑 Class Component
class ClassComponentExample extends Component {
  render() {
    return <p>This is a Class Component example.</p>;
  }
}

// ⚛️ Main App
const App = () => {
  const [name, setName] = useState("React Learner");

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Day 06 – Advanced React Concepts</h1>
      <Wrapper>
        <ErrorBoundary>
          <Greeting name={name} />
        </ErrorBoundary>

        <Info />
        <ClassComponentExample />

        <button
          onClick={() => setName(name === 'React Learner' ? '' : 'React Learner')}
          style={{ marginTop: '10px', padding: '8px 16px', cursor: 'pointer' }}
        >
          Toggle Name (Trigger Error)
        </button>
      </Wrapper>
    </div>
  );
};

export default App;
