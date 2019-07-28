import React from 'react'
import html5 from './html5.png'
import css3 from './css3.png'
import sass from './sass.svg'
import react from './react.png'
import js from './js.png'
import nodejs from './nodejs.png'
import express from './express.png'
import mongodb from './mongodb.png'
import github from './github.png'

const Skills = () => {
  return (
    <div id='skills'>
      <div className='container'>
        <div className='skills-content'>
          <div className='skills-skillsset-wrap'>
            <div className='skills-skillsset-name'>Front End</div>
            <div className='line' />
            <div className='skills-skillsset'>
              <div className='skills-item'>
                <img className='skills-img' src={html5} alt='' />
                <div className='skills-skill'>HTML5</div>
              </div>
              <div className='skills-item'>
                <img className='skills-img' src={css3} alt='' />
                <div className='skills-skill'>CSS3</div>
              </div>
              <div className='skills-item'>
                <img className='skills-img' src={js} alt='' />
                <div className='skills-skill'>JS</div>
              </div>
              <div className='skills-item'>
                <img className='skills-img' src={react} alt='' />
                <div className='skills-skill'>React</div>
              </div>
              <div className='skills-item'>
                <img className='skills-img' src={sass} alt='' />
                <div className='skills-skill'>Sass</div>
              </div>
            </div>
          </div>
          <div className='skills-skillsset-wrap'>
            <div className='skills-skillsset-name'>Back End</div>
            <div className='line' />
            <div className='skills-skillsset'>
              <div className='skills-item'>
                <img className='skills-img' src={express} alt='' />
                <div className='skills-skill'>Express</div>
              </div>
              <div className='skills-item'>
                <img className='skills-img' src={mongodb} alt='' />
                <div className='skills-skill'>MongoDB</div>
              </div>
              <div className='skills-item'>
                <img className='skills-img' src={nodejs} alt='' />
                <div className='skills-skill'>Node.js</div>
              </div>
            </div>
          </div>
          <div className='skills-skillsset-wrap'>
            <div className='skills-skillsset-name'>Other</div>
            <div className='line' />
            <div className='skills-skillsset'>
              <div className='skills-item'>
                <img className='skills-img' src={github} alt='' />
                <div className='skills-skill'>Github</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
