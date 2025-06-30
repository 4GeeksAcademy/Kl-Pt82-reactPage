import React from 'react';

export default function Features() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row text-center">
          {[1,2,3,4].map((_, i) => (
            <div className="col-12 col-sm-6 col-md-3 mb-3" key={i}>
              <div className="card" aria-hidden="true">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="180"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  aria-hidden="true"
                >
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                </svg>
                <div className="card-body">
                  <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                  </h5>
                  <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                  </p>
                  <a
                    href="#"
                    tabIndex="-1"
                    className="btn btn-primary disabled placeholder col-6 py-2"
                  ></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
