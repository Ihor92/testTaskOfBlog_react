import React from 'react';
import './TabButtons.css';
import { Link } from 'react-router-dom';

export default function TabButtons() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <Link to="/">
            <button>
              Home
            </button>
          </Link>
        </li>
        <li>
          <Link to="/post-page/">
            <button>
              Posts page
            </button>
          </Link>
        </li>
        <li>
          <Link to="/add-post-blog/">
            <button>
              Add post blog
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}