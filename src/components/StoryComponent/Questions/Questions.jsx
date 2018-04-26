import React from 'react'

import classes from './Questions.css'

const Questions = props => {
  return (
    <li className={classes.Questions}>
      <h3>{props.headerText}</h3>
      <p>
        {props.pText}
      </p>
    </li>
  )
}

export default Questions
