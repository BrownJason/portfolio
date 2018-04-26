import React, { Component } from 'react'
import {
  Outer,
  OuterContent,
  AboutMe
} from './HomeComponent.css'
import BioContent from './BioContent/BioContent'

class HomeComponent extends Component {
  render () {
    return (
      <div className={Outer}>
        <div className={OuterContent}>
          <div className={AboutMe}>
            <h2>Jason Brown</h2>
          </div>
          <BioContent />
        </div>
      </div>
    )
  }
}

export default HomeComponent
