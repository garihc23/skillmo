import React from 'react';
import '../assets/css/Navbar.css';
import Image from '../assets/images/Layer 1.png';
import { FaAngleDown, FaFlag, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
export const Navbar = () => {
  const history = useHistory();
  const loginPage = () => {
    history.push('/login');
  };
  const registerPage = () => {
    history.push('/register');
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" to="/course-details">
            <img src={Image} alt="logo" />
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
          <div className="collapse_menu navbar-collapse">
            <ul className="navbar-nav">
              <li class="nav-item ">
                <Link
                  to="/course-list"
                  class="nav-link active"
                  href="/course-details"
                  id="navbarDropdown"
                  role="button"
                  // data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <b>Courses </b>

                  <FaAngleDown className="dropdown" />
                </Link>
                {/* <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/course-details">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul> */}
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link active"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <b>Categories </b>
                  <FaAngleDown className="dropdown" />
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link active"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <b>Trades </b>
                  <FaAngleDown className="dropdown" />
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link active"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <b>Accreditations </b>
                  <FaAngleDown className="dropdown" />
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="collapse_submenu navbar-collapse mx-3">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    Partners
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    About us
                  </a>
                </li>
              </ul>
              <li className="nav-item dropdown mx-4">
                <a
                  class="nav-link active"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaFlag />
                  &nbsp;&nbsp; EN <FaAngleDown className="dropdown" />
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item d-flex">
                <a className="icon nav-link active" href="/">
                  <FaHeart className="heart m-2" />
                </a>
                &nbsp;&nbsp;&nbsp;
                <a className="icon nav-link active" href="/">
                  <FaShoppingCart className="cart m-2" />
                </a>
              </li>
              <div className="btn d-flex mx-3" role="search">
                <button class="btn m-2" onClick={() => loginPage()}>
                  <b>LOGIN</b>
                </button>
                <button
                  class="btn m-1 px-5"
                  type="submit"
                  style={{
                    background: ' rgba(4, 201, 119, 1)',
                    color: '#fafafa',
                  }}
                  onClick={() => registerPage()}
                >
                  <b>REGISTER</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
