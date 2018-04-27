import React,{Fragment} from 'react'

import classes from './Questions.css'

const Questions = props => {
  let str = props.afterLink
  let link1 = 'Brown Family League'
  let link2 = 'Children with Hair Loss'

  console.log(str)
  console.log(props.link)

  return (
    <li className={classes.Questions}>
      <h3>{props.headerText}</h3>
      {props.pText ? <p>{props.pText}</p> : <Fragment><p>{props.beforeLink}<a href={`${props.link}`}> {str.includes(link1) ? link1 : link2 } </a>{props.afterLink}</p></Fragment>}
    </li>
  )
}

export default Questions
