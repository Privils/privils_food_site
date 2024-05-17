import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header = ({ reloadPage }) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />

      <header>
        <nav>
          <Link class="sites-name" to="#">
            <span>y</span>
            <span>u</span>
            <span>m</span>
            <span>m</span>
            <span>y</span>
            <span>n</span>
            <span>o</span>
            <span>t</span>
            <span>e</span>
            <span>s</span>
          </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search_Meal">search Meal</Link>
            </li>
            <li>
              <Link to="/about">about us</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Header;
