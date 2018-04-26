import React, { Component } from 'react'
import HomeComponent from './components/HomeComponent/HomeComponent'
import NavComponent from './components/NavComponent/NavComponent'
import WorksComponent from './components/WorksComponent/WorksComponent'
import InterestComponent from './components/InterestComponent/InterestComponent'
import StoryComponent from './components/StoryComponent/StoryComponent'
import { Route } from 'react-router-dom'
import FooterComponent from './components/FooterComponent/FooterComponent'

import questions1 from './StoryQuestions/questions1.json'
import questions2 from './StoryQuestions/questions2.json'
import questions3 from './StoryQuestions/questions3.json'
import questions4 from './StoryQuestions/questions4.json'
import questions5 from './StoryQuestions/questions5.json'
import questions6 from './StoryQuestions/questions6.json'
import questions7 from './StoryQuestions/questions7.json'

class App extends Component {
  state = {
    questions: [
      questions1,
      questions2,
      questions3,
      questions4,
      questions5,
      questions6,
      questions7
    ]
  }

  render () {
    return (
      <div className='App' id='home'>
        <NavComponent />
        <Route exact path='/' component={HomeComponent} />
        <Route
          exact
          path='/Story'
          render={() => <StoryComponent questions={this.state.questions} />}
        />
        <Route exact path='/Works' component={WorksComponent} />
        <Route exact path='/Interests' component={InterestComponent} />
        <FooterComponent />
      </div>
    )
  }
}

export default App
