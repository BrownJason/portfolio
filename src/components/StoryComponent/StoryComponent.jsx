import React, {Component} from 'react'
import classes from './StoryComponent.css'

import Questions from './Questions/Questions'

class StoryComponent extends Component {
  state = {
    nextImg: false,
    nextImgSrc: `${require('../../images/detroit2.jpg')}`,
    currentImg: `${require('../../images/detroit.jpg')}`
  }

  handleClick = () =>{
    this.setState({ nextImg: !this.state.nextImg})
  }

  render()  {
    var imgUrl = this.state.nextImg ? this.state.nextImgSrc : this.state.currentImg
    var divStyle = { backgroundImage: 'url(' + imgUrl + ')'}
  
  
  return (
    <div className={classes.Outer} style={divStyle} onClick={this.handleClick}>
      <div className={classes.OuterContent}>
        <div className={classes.StoryQuestions}>
          <ul>
            {console.log(this.props.questions)}
            {this.props.questions.map(question => (
              <Questions
                key={question.h3}
                headerText={question.h3}
                pText={question.p}
                beforeLink={question.beforeLink}
                link={question.links}
                linkText={question.linkText}
                afterLink={question.afterLink}
              />
            ))}

          </ul>
        </div>
      </div>
    </div>
  )
}
}

export default StoryComponent
