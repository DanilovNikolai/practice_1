import React, { useContext } from "react";
// styles
import styles from "./Navbar.module.scss";
// react-router-dom
import { NavLink } from "react-router-dom";
// components
import ButtonActive from "../ButtonActive";
// context
import { AuthContext } from "../../../context/context";

function Navbar() {
  const { isAuthorized, setIsAuthorized } = useContext(AuthContext);

  function logout() {
    setIsAuthorized(false);
    localStorage.removeItem("auth");
  }

  return (
    <nav className={styles.Navbar}>
      <ButtonActive onClick={logout}>Log out</ButtonActive>
      <ul className={styles.NavbarList}>
        <li className={styles.NavbarItem}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.NavbarLink} ${styles.active}`
                : styles.NavbarLink
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className={styles.NavbarItem}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.NavbarLink} ${styles.active}`
                : styles.NavbarLink
            }
            to="/counter"
          >
            Counter
          </NavLink>
        </li>
        <li className={styles.NavbarItem}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.NavbarLink} ${styles.active}`
                : styles.NavbarLink
            }
            to="/fetch"
          >
            Fetch
          </NavLink>
        </li>
        <li className={styles.NavbarItem}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.NavbarLink} ${styles.active}`
                : styles.NavbarLink
            }
            to="/posts"
          >
            Posts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
