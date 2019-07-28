import React from 'react'

const About = () => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='about-content'>
          <div className='about-header'>
            <p>
              Hello, my name is{' '}
              <span className='bold'>Alexander Vostroknutov</span>.
            </p>
            <div className='line' />
            <p>
              I'm a <span className='bold'>Fullstack Developer</span>.
            </p>
            <br />
            <br />
            <p>
              My priority is making <span className='bold'>user-friendly </span>{' '}
              web applications.
            </p>
          </div>
          <div className='about-button'>
            <a className='btn-main' href='#portfolio'>
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
