import React, {useRef, useEffect, useState} from 'react'
import './static/App.scss'
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Services from './Services'
import Menu from './Menu'
import Loader from './Loader'

export default function App() {
    const scrollAbout = useRef(null)
    const scrollSkills = useRef(null)
    const scrollVasya = useRef(null)

    const [loader, setLoader] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoader(false)
            clearTimeout(timeout)
        }, 1500)
    })

    return (
        loader ?
        <Loader /> :
        <div className="app">
            <Header />
            <About refProp={scrollAbout} />
            <Skills refProp={scrollSkills} />
            <Services refProp={scrollVasya} />
            <Menu refProp={[scrollAbout, scrollSkills, scrollVasya]} />
        </div>
    )
}



// const [loader, setLoader] = useState(false)

//     useEffect(() => {
//         document.onreadystatechange = () => {
//             if (document.readyState === "complete") {
//                 setLoader(false)
//             } else {
//                 setLoader(true)
//             }
//         }
//     })

//     let loadApp;
//     if (loader) {
//         loadApp = (
//             <div className="loader">
//                 <div className="loader__spin"></div>
//             </div>
//         )

//     } else {
//         loadApp = (
//             <>
//                 <Header />
//                 <About refProp={scrollAbout} />
//                 <Skills refProp={scrollSkills} />
//                 <Services refProp={scrollVasya} />
//                 <Menu refProp={[scrollAbout, scrollSkills, scrollVasya]} />
//             </>
//         )
//     }