import React, { Component } from 'react'
import classes from './WorksComponent.css'
import JavaModule from './JavaModule/JavaModuel'
import SpringModule from './SpringModule/SpringModule'
import ReactModule from './ReactModule/ReactModule'
import JSModule from './JavaScripModule/JSModule'

class WorksComponent extends Component {
  render () {
    return (
      <div className={classes.Outer}>
        <div className={classes.OuterContent}>
          <div className={classes.Inner}>
            <JSModule />
            <ReactModule />
            <SpringModule />
            <JavaModule />
          </div>
        </div>
      </div>
    )
  }
}

export default WorksComponent
