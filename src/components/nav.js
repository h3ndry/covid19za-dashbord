import React from 'react';
import { Link } from 'react-router-dom';

import NavStyle from '../styles/navStyle';

export default function Nav() {
  return (
    <NavStyle>
      <ul>
        <li>
          <Link to="/">Overview </Link>
        </li>
        <li>
          <Link to="/provincial">Provincial</Link>
        </li>
      </ul>
    </NavStyle>
  );
}
