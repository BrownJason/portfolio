import React, { Component } from 'react'
import { NavBar, TopNav, LinkStyles } from './NavComponent.css'
import { NavLink } from 'react-router-dom'
import HomeComponent from '../HomeComponent/HomeComponent'
import WorksComponent from '../WorksComponent/WorksComponent'
import InterestComponent from '../InterestComponent/InterestComponent'
import StoryComponent from '../StoryComponent/StoryComponent'

class NavComponent extends Component {
  render () {
    return (
      <div className={TopNav}>
        <nav className={NavBar}>
          <ul>
            <NavLink
              exact
              to='/'
              component={HomeComponent}
              activeStyle={{ color: 'blue' }}
              className={LinkStyles}
            >
              <i className='fa fa-home'>&nbsp;&nbsp;Home</i>
            </NavLink>
            <NavLink
              exact
              to='/Story'
              activeStyle={{ color: 'blue' }}
              className={LinkStyles}
              component={StoryComponent}
            >
              <i className='fa fa-book'>&nbsp;&nbsp;Story</i>
            </NavLink>
            <NavLink
              exact
              to='/Works'
              activeStyle={{ color: 'blue' }}
              className={LinkStyles}
              component={WorksComponent}
            >
              <i className='fa fa-archive'>&nbsp;&nbsp;Works</i>
            </NavLink>
            <NavLink
              exact
              to='/Interests'
              activeStyle={{ color: 'blue' }}
              className={LinkStyles}
              component={InterestComponent}
            >
              <i className='fa fa-gamepad'>&nbsp;&nbsp;Interests</i>
            </NavLink>
          </ul>
        </nav>
      </div>
    )
  }
}

export default NavComponent
