import React from 'react';
import './TabButtons.css';

export default function TabButtons() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#posts">Posts page</a>
        </li>
        <li>
          <a href="#add">Add post blog</a>
        </li>
      </ul>
    </nav>
  )
}