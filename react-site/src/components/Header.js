import React, {useState, useEffect} from 'react'
import logo from './static/logo.svg'
import './static/App.scss'


export default function Header() {
    const handleClick = () => {
        const menu = document.querySelector('.menu')
        const stub = document.querySelector('.menu__stub')

        if (menu.classList.contains('hidden')) {
            menu.style.left = '0px'
            stub.style.opacity = '.25'
            menu.classList.remove('hidden')
        } else {
            menu.style.left = '-250px'
            stub.style.opacity = '0'
            menu.classList.add('hidden')
        }
    } 
    useEffect(() => {
		const header = document.querySelector('.header')
        const sticky = header.offsetTop
        
		window.addEventListener('scroll', () => {
			if (window.pageYOffset > sticky + 10) {
                header.classList.add('sticky')
			} else {
                header.classList.remove('sticky')
            }
		 })
	}, [window.pageYOffset])

    return (
    <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <button className='header__burger' onClick={() => handleClick()}>
            Burger
        </button>
        <Menu />
    </header>
    )
}


function Menu() {
    useEffect(() => {
        const menu = document.querySelector('.menu')
        const stub = document.querySelector('.menu__stub')
        const dragMenu = new DragHiddenMenu(menu,stub)

        dragMenu.stub.addEventListener('mousedown', ()  => dragMenu.mouseDown())
        dragMenu.stub.addEventListener('mousemove', e => dragMenu.mouseMove(e))
        dragMenu.stub.addEventListener('mouseup', () => dragMenu.mouseUp())
    })
    
    return (
        <div className="menu hidden">
            <ul className='menu__nav'>
                <li><a href="#">a</a></li>
                <li><a href="#">b</a></li>
                <li><a href="#">c</a></li>
                <li><a href="#">d</a></li>
            </ul>
            <div className="menu__stub"></div>
        </div>
    )
}


class DragHiddenMenu {
    constructor(menu, stub) {
        this.menu = menu
        this.stub = stub
        this.isMouseDown = false
    }

    mouseDown() {
        this.isMouseDown = true
        this.diffPosX = 0
    }
    
    mouseMove(e) {
        if(!this.isMouseDown) return

        this.posX = this.diffPosX - e.clientX
        this.diffPosX = e.clientX
        this.menu.style.left = (this.menu.offsetLeft - this.posX) + "px"
     
        if (this.menu.offsetLeft >= 0) {
            this.menu.style.left = '0px'
            this.menu.style.transition = 'none';
            this.stub.style.transition = 'none';
        }

        if (this.menu.offsetLeft <= -250) {
            this.menu.style.left = '-250px'
        }

        if (this.isMouseDown) {
            if (this.menu.offsetLeft <= -241) {
                this.stub.style.opacity = `.00${this.menu.offsetLeft + 250}`

            } else if (this.menu.offsetLeft <= -151) {
                this.stub.style.opacity = `.0${this.menu.offsetLeft + 250}`

            } else {
                this.stub.style.opacity = `.${this.menu.offsetLeft + 250}`
            }
        }
    }
    
    mouseUp() {
        this.isMouseDown = false;
        this.menu.style.left = '-250px'
        this.menu.classList.add('hidden')
        this.menu.style.transition = 'left .2s, visibility .2s'
        this.stub.style.opacity = '0'
    }
}


