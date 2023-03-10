import React from "react";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* logo - start */}
        <a className="navbar-brand" href="/">
          <img
            src="https://res.cloudinary.com/biandamara/image/upload/v1676469518/Archaic%20Studios/icon_qtpbou.jpg"
            alt=""
            style={{ height: "2rem", borderRadius: "50%" }}
          />
        </a>
        {/* logo - end */}

        {/* expand menu - start */}
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        {/* expand menu - end */}

        {/* menu - start */}
        {/* <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Disabled
              </a>
            </li>
          </ul>
        </div> */}
        {/* menu - end */}
      </div>
    </nav>
  );
}

export default Navigation;
