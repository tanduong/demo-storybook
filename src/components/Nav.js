import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Nav.module.css';

export default () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/" exact activeClassName={styles.activeNav}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/cart" activeClassName={styles.activeNav}>
          Cart
        </NavLink>
      </li>
    </ul>
  </nav>
);
