import React, { Component } from 'react'
import HomeComponent from './components/HomeComponent/HomeComponent'
import NavComponent from './components/NavComponent/NavComponent'
import WorksComponent from './components/WorksComponent/WorksComponent'
import InterestComponent from './components/InterestComponent/InterestComponent'
import StoryComponent from './components/StoryComponent/StoryComponent'
import { Route } from 'react-router-dom'
import FooterComponent from './components/FooterComponent/FooterComponent'

class App extends Component {
  render () {
    return (
      <div classNAme='App' id='home'>
        <NavComponent />
        <Route exact path='/' component={HomeComponent} />
        <Route exact path='/Story' component={StoryComponent} />
        <Route exact path='/Works' component={WorksComponent} />
        <Route exact path='/Interests' component={InterestComponent} />
        <FooterComponent />
      </div>
    )
  }
}

export default App
