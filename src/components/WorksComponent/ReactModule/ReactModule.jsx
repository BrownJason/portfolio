import React from 'react'

import classes from './ReactModule.css'

const ReactModule = () => (
  <div className={classes.ReactModule}>
    <a href='https://github.com/BrownJason/networking'>
      <div className={classes.ReactContent}>
        <span>
          <i className='fab fa-react' />
          &nbsp;&nbsp;React Networking Tweet Handleer
        </span>
        <img src={require('../../../images/networkingSnip.PNG')} alt='' />
        <p>
          User is given a input form (text field) to write out a message
          that they want to get posted to thier timeline. Once a user clicks
          on the Post button, this function fires off, first making sure if
          {' '}
          the form is valid. Once valid it will then post the message and rerender
          the DOM to display this message to the user.
        </p>
      </div>
    </a>
  </div>
)

export default ReactModule
