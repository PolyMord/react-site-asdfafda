import React from 'react';
import logo from './static/logo.svg';
import './static/App.scss';

function Header() {
  return (
    <header className="header">
      <img src={logo} className="app-logo" alt="logo" />
    </header>
  )
}

export default function App() {
  return (
    <div className="app">
      <Header />
    </div>
  );
}
