import React from 'react'

import classes from './SpringModule.css'

const SpringModule = () => (
  <div className={classes.SpringModule}>
    <a href='https://github.com/BrownJason/spring_assessment'>
      <div className={classes.SpringContent}>
        <span>
          <i class='fab fa-java' />
          &nbsp;&nbsp;Spring Assessment Add Relations/Address
        </span>
        <img src={require('../../../images/springSnip.PNG')} alt='' />
        <p>
          Adds a user to a specified address only if that current user doesn't have
          an address already.
          <br />
          Create relations between users if they want to be related
        </p>
      </div>
    </a>
  </div>
)

export default SpringModule
