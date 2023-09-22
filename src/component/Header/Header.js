import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function home() {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
    </header>
  )
}
