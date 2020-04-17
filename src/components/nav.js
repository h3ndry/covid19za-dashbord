import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Overview </Link>
        </li>
        <li>
          <Link to="/provincial">Provincial</Link>
        </li>
      </ul>
    </div>
  );
}
