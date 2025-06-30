import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-12 col-md-6 mb-2 mb-md-0">
            <p className="mb-0">&copy; 2025 MyBrand. All rights reserved.</p>
          </div>
          <div className="col-12 col-md-6 text-md-end">
            <a href="#" className="text-light me-3">Privacy</a>
            <a href="#" className="text-light">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
