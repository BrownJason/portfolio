import React from 'react'
import classes from './StoryComponent.css'

import Questions from './Questions/Questions'

const StoryComponent = props => {
  return (
    <div className={classes.Outer}>
      <div className={classes.OuterContent}>
        <div className={classes.StoryQuestions}>
          <ul>
            {console.log(props.questions)}
            {props.questions.map(question => (
              <Questions
                key={question.h3}
                headerText={question.h3}
                pText={question.p}
              />
            ))}

          </ul>
        </div>
      </div>
    </div>
  )
}

export default StoryComponent
