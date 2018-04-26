import React from 'react'
import classes from './StoryComponent.css'

import Questions from './Questions/Questions'

const StoryComponent = props => {
  const questions = props.questions
  console.log(questions)
  console.log(Object.values(questions).map((values) => ({ ...values})))
    return (
      <div className={classes.Outer}>
        <div className={classes.OuterContent}>
          <div className={classes.StoryQuestions}>
            <ul>
              {/* {Object.keys(questions).map(keys => (
                <Questions
                key={questions.keys}
                headerText={questions.h3}
                pText={questions.p}
                />
              ))} */}
            </ul>
          </div>
        </div>
      </div>
    )
}

export default StoryComponent
