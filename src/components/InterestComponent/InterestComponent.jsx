import React, { Component } from 'react'
import classes from './InterestComponent.css'

class InterestComponent extends Component {
  render () {
    return (
      <div className={classes.Outer}>
        <a href='http://www.pathofexile.com/account/view-profile/Zijesinop'>
          <div className={classes.slide}>
            <img src={require('../../images/pathOfExile.jpg')} alt='' />

          </div>
        </a>
      </div>
    )
  }
}

export default InterestComponent
