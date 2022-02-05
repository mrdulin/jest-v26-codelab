import React from 'react';
import { Link } from 'react-router-dom';

export function SideBar() {
  return (
    <ul>
      <li>
        <Link to="/location1">location 1</Link>
      </li>
      <li>
        <Link to="/location2">location 2</Link>
      </li>
    </ul>
  );
}
