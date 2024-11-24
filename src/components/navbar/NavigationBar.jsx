import { NavLink } from "react-router-dom";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" aria-current="page" to="/">
          University Wishlist
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Universities
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/wishlist">
                Wishlist
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
