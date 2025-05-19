import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <nav style={{ background: '#eee', padding: '10px' }}>
      <NavLink to="/" style={{ margin: '0 10px' }}>Home</NavLink>
      <NavLink to="/about" style={{ margin: '0 10px' }}>About</NavLink>
      <NavLink to="/contact" style={{ margin: '0 10px' }}>Contact</NavLink>
    </nav>
    <main style={{ padding: '20px' }}>
      <Outlet />
    </main>
    <footer style={{ background: '#eee', padding: '10px', textAlign: 'center' }}>
      <p>© 2025 MyReactApp</p>
    </footer>
  </>
);

const Home = () => <h2>🏠 Welcome to the Home Page</h2>;
const About = () => <h2>📖 This is the About Page</h2>;
const Contact = () => <h2>📫 Contact us at contact@example.com</h2>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
