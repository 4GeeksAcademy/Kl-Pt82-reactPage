import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Random Title Here..</a>
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
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Service</a></li>
            <li className="nav-item mt-2 mt-lg-0">
              <a className="nav-link btn btn-primary text-white ms-lg-2" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
