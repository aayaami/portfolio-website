import React from 'react'

const Contact = () => {
  return (
    <div id='contact'>
      <div className='container'>
        <div className='contact-content'>
          <div className='contact-header'>
            <p>You have something to offer me?</p>
          </div>
          <div className='contact-button'>
            <a
              href='mailto:vostroknutov.alexander@gmail.com'
              className='btn-main'
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
