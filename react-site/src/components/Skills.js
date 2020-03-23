import React from 'react'
import statisticIcon from './static/statistic.png'

export default function Skills(props) {
    return (
        <section className='skills' ref={props.refProp}>
            <div className='skills__container container'>
                <div className='skills__about'>
                    <div className='skills__about_creative'>
                        <h1 className='creative-head'>Creative & Commited</h1>
                        <p className='creative-text'> 
                            Nam id congue lectus, a venenatis massa.
                            Maecenas justo libero, vulputate vel nunc id,
                            blandit feugiat sem. Mauris impe rdiet,
                            neque ornare varius.
                        </p>
                    </div>
                    <div className='skills__about_text'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nam eu metus sit amet odio sodales placerat. 
                            Sed varius leo ac leo fermentum, eu cursus nunc maximus. 
                            Integer convallis nisi nibh, et ornare neque ullamcorper ac. 
                            Nam id congue lectus, a venenatis massa. Maecenas justo libero, 
                            vulputate vel nunc id, blandit feugiat sem. 
                            Mauris imperdiet, neque ornare varius mattis.
                        </p>
                    </div>
                </div>
                <div className='skills__present'>
                    <div className='skills__present_items'>
                        <img src={statisticIcon} alt=""/>
                        <h2>React</h2>
                        <p>Etiam nec odio vestibulum est.</p>
                    </div>
                    <div className='skills__present_items'>
                        <img src={statisticIcon} alt=""/>
                        <h2>Java Script</h2>
                        <p>Odio vestibulum est mattis.</p>
                    </div>
                    <div className='skills__present_items'>
                        <img src={statisticIcon} alt=""/>
                        <h2>HTML/CSS</h2>
                        <p>Vestibulum est mattis effic.</p>
                    </div>
                    <div className='skills__present_items'>
                        <img src={statisticIcon} alt=""/>
                        <h2>Lazy</h2>
                        <p>Vestibulum est mattis effic.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}