import React, {useState, useEffect} from 'react'
import logo from './static/logo.svg'
import './static/App.scss'


export default function Header() {
    const handleClick = () => {
        const nav = document.querySelector('.header__nav')
        if (nav.classList.contains('hidden')) {
            nav.classList.remove('hidden')
        } else {
            nav.classList.add('hidden')
        }
    }

    return (
    <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <button className='header__burger' onClick={() => handleClick()}>
            Burger
        </button>
        <ul className="header__nav hidden">
            <li><a className="header__link header__hi" href="#">Hi</a></li>
            <li><a className="header__link header__hello" href="#">Hello</a></li>
            <li><a className="header__link header__priv" href="#">Priv</a></li>
            <li><a className="header__link header__qq" href="#">QQ</a></li>
        </ul>
    </header>
    )
}
