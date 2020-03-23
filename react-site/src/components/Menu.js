import React, {useEffect} from 'react'

export default function Menu(props) {
    useEffect(() => {
        const menu = document.querySelector('.menu')
        const stub = document.querySelector('.menu__stub')
        const ham = document.querySelector('.ham')
        const dragMenu = new DragHiddenMenu(menu, stub, ham)

        dragMenu.stub.addEventListener('mousedown', ()  => dragMenu.mouseDown())
        dragMenu.stub.addEventListener('mousemove', e => dragMenu.mouseMove(e))
        dragMenu.stub.addEventListener('mouseup', () => dragMenu.mouseUp())
    })

    const [about, skills, vasya] = props.refProp
    const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop)
    const scrollToAbout = () => scrollToRef(about) 
    const scrollToSkills = () => scrollToRef(skills) 
    const scrollToVasya = () => scrollToRef(vasya) 
    
    return (
        <div className="menu hidden">
            <ul className='menu__nav'>
                <button onClick={scrollToAbout} >About</button>
                <button onClick={scrollToSkills} >Skills</button>
                <button onClick={scrollToVasya} >Vasya</button>
                <button onClick={scrollToSkills} >Petya</button>
                <button onClick={scrollToSkills} >Contacts</button>
            </ul>
            <div className="menu__stub"></div>
        </div>
    )
}


class DragHiddenMenu {
    constructor(menu, stub, ham) {
        this.menu = menu
        this.stub = stub
        this.ham = ham
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
        this.ham.classList.remove('active')
        this.menu.style.transition = 'left .2s, visibility .2s'
        this.stub.style.opacity = '0'
    }
}