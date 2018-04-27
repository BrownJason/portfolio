import React from 'react'

import classes from './JSModule.css'

const JSModule = () => (
  <div className={classes.JsModule}>
    <a href='https://github.com/BrownJason/quizler'>
      <div className={classes.JsContent}>
        <span>
          <i className='fab fa-node-js' />
          &nbsp;&nbsp;JavaScrip Quizler Choose Random
        </span>
        <img src={require('../../../images/javaScriptSnip.PNG')} alt='' />
        <p>
          Implement Choose Random function that would pick any given item / items
          {' '}
          in your array from user input; given that it wasn't empty but if it was
          {' '}
          empty, just return that empty array.{' '}
        </p>
      </div>
    </a>
  </div>
)

export default JSModule
