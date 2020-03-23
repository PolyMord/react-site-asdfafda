import React from 'react'
import envelope from './static/envelope-small.png'
import phone from './static/phone-call-small.png'
import monitor from './static/monitor-small.png'

export default function About(props) {
    return (
        <section className='about' ref={props.refProp}>
            <div className='about__container container'>
                <h3 className='about__hello'>Hello I’m</h3>
                <h2 className='about__name'>Stas Stasov</h2>
                <h3 className='about__who'>Front-end developer & Lazy person</h3>
                <div className="about__contacts">
                    <a className='about__links' href="#">
                        <img src={envelope} alt=""/>
                        <span>contactme@templatename.com</span>
                    </a>
                    <a className='about__links' href="#">
                        <img src={phone} alt=""/>
                        <span> +76 6524 567862 763</span>
                    </a>
                    <a className='about__links' href="#">
                        <img src={monitor} alt=""/>
                        <span> www.mytemplatename.com</span>
                    </a>
                </div>
                <div className='about__icons'>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
            </div>
        </section>
    )
}