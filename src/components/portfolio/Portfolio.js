import React from 'react'
import instagram from './instagram.png'
import chatapp from './chatapp.png'

const Portfolio = () => {
  return (
    <div id='portfolio'>
      <div className='container'>
        <div className='portfolio-content'>
          <div className='portfolio-item'>
            <img className='image' src={chatapp} alt='' />
            <div className='links'>
              <a
                className='btn-main'
                href='https://github.com/Aayaami/Instaclone'
                target='_blank'
                rel='noopener noreferrer'
              >
                Github Repo
              </a>
              <a
                className='btn-main'
                href='https://secure-brushlands-33202.herokuapp.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Try
              </a>
            </div>
            <p className='info'>
              <h2>Instagram clone</h2>
              <br />
              <div>
                <p>
                  This is an instagram clone with minimal set of functions(View
                  posts, like them, comment them, etc).
                </p>
                <br />
                <h4>More details:</h4>
                <p>
                  Follow users, view lists of all posts and followed users
                  posts, view profiles, send and receive private messages in
                  real time.
                </p>
              </div>
            </p>
          </div>
          <div className='portfolio-item'>
            <img className='image' src={instagram} alt='' />
            <div className='links'>
              <a
                className='btn-main'
                href='https://github.com/Aayaami/Chat-App'
                target='_blank'
                rel='noopener noreferrer'
              >
                Github Repo
              </a>
              <a
                className='btn-main'
                href='https://damp-earth-61068.herokuapp.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Try
              </a>
            </div>
            <p className='info'>
              <h2>Chatting Application</h2>
              <br />
              <div>
                <p>
                  This is a chatting app where users can create private chats
                  and accept join requests.
                </p>
                <br />
                <h4>More details:</h4>
                <p>
                  Search for chats, send join requests, view list of your chats.
                </p>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
