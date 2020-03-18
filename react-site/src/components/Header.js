import React from 'react'
import logo from './static/logo.svg'
import './static/App.scss'


export default function Header() {
    return (
      <header className="header">
        <img src={logo} className="app-logo" alt="logo" />
      </header>
    )
  }
  