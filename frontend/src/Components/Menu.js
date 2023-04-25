import { useState, useEffect } from 'react';
import '../Css/Menu.css';

const Menu = () => {
  const [activePage, setActivePage] = useState('');

  useEffect(() => {
    const path = window.location.pathname;
    setActivePage(path);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-secondary">
      <div className="container-fluid">
        <a className="navbar-brand text-primary fw-bold" href="/">
          Library Books Management
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fs-5 fw-bold">
            <li className={`nav-item ${activePage === '/Insert' ? 'active' : ''}`}>
              <a className="nav-link text-success" href="/Insert">
                Insert
              </a>
            </li>
            <li className={`nav-item ${activePage === '/Display' ? 'active' : ''}`}>
              <a className="nav-link text-success" href="/Display">
                Display
              </a>
            </li>
            <li className={`nav-item ${activePage === '/Delete' ? 'active' : ''}`}>
              <a className="nav-link text-success" href="/Delete">
                Delete
              </a>
            </li>
            <li className={`nav-item ${activePage === '/Search' ? 'active' : ''}`}>
              <a className="nav-link text-success" href="/Search">
                Search
              </a>
            </li>
            <li className={`nav-item ${activePage === '/About' ? 'active' : ''}`}>
              <a className="nav-link text-success" href="/About">
                About us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;