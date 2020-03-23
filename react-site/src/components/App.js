import React, {useRef} from 'react'
import './static/App.scss'
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Services from './Services'
import Menu from './Menu'

export default function App() {
  const scrollAbout = useRef(null)
  const scrollSkills = useRef(null)
  const scrollVasya = useRef(null)

  return (
    <div className="app">
      <Header />
      <About refProp={scrollAbout} />
      <Skills refProp={scrollSkills} />
      <Services refProp={scrollVasya} />
      <Menu refProp={[scrollAbout, scrollSkills, scrollVasya]} />
    </div>
  )
}