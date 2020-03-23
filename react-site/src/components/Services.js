import React from 'react'
import statisticIcon from './static/statistic.png'

export default function Services(props) {
    return (
        <section className='services' ref={props.refProp}>
            <div className='services__container container'>
                <div className='services__personal'>
                    <div className="line"></div>
                    <p>Personal Services</p>
                </div>
                <div className='services__items'>
                    <div className='item'>
                        <img src="" alt=""/>
                        <h2></h2>
                        <p></p>
                    </div>
                    <div className='item'>
                        <img src="" alt=""/>
                        <h2></h2>
                        <p></p>
                    </div>
                    <div className='item'>
                        <img src="" alt=""/>
                        <h2></h2>
                        <p></p>
                    </div>
                    <div className='item'>
                        <img src="" alt=""/>
                        <h2></h2>
                        <p></p>
                    </div>
                    <div className='item'>
                        <img src="" alt=""/>
                        <h2></h2>
                        <p></p>
                    </div>
                    <div className='item'>
                        <img src="" alt=""/>
                        <h2></h2>
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
    )
}