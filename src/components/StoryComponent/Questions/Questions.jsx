import React,{Fragment} from 'react'

import classes from './Questions.css'

const Questions = props => {
  return (
    <li className={classes.Questions}>
      <h3>{props.headerText}</h3>
      {props.pText ? <p>{props.pText}</p> : <Fragment><p>{props.beforeLink}<a href={`${props.link}`}> {props.linkText} </a>{props.afterLink}</p></Fragment>}
    </li>
  )
}

export default Questions
