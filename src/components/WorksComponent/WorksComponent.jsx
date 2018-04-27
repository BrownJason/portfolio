import React, { Component } from 'react'
import classes from './WorksComponent.css'

class WorksComponent extends Component {
  render () {
    return (
      <div className={classes.Outer}>
        <div className={classes.OuterContent}>
          <div className={classes.JsModule}>
            <a href='https://github.com/BrownJason/quizler'>
              <div className={classes.JsContent}>
                <span><i className='fab fa-node-js' />&nbsp;&nbsp;JavaScrip Quizler Choose Random</span>
                <img src={require('../../images/javaScriptSnip.PNG')} alt='' />
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
          <div className={classes.ReactModule}>
            <a href='https://github.com/BrownJason/networking'>
              <div className={classes.ReactContent}>
                <span><i className='fab fa-react'/>&nbsp;&nbsp;React Networking Tweet Handleer</span>
                <img src={require('../../images/networkingSnip.PNG')} alt='' />
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
          <div className={classes.SpringModule}>
            <a href='https://github.com/BrownJason/spring_assessment'>
              <div className={classes.SpringContent}>
                <span><i class='fab fa-java' />&nbsp;&nbsp;Spring Assessment Add Relations/Address</span>
                <img src={require('../../images/springSnip.PNG')} alt='' />
                <p>
                  Adds a user to a specified address only if that current user doesn't have
                  an address already.
                  <br />
                  Create relations between users if they want to be related
                </p>
              </div>
            </a>
          </div>
          <div className={classes.JavaModule}>
            <a href='https://github.com/cooksystemsinc/java-xml-file-transfer-assessment-BrownJason'>
              <div className={classes.JavaContent}>
              <span>Java Assessment XML Fil Transfer</span>
              <img src={require('../../images/javaSnip.PNG')} alt=''/>
              <p>
                Purpose of
              </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default WorksComponent
