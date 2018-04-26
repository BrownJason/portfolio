import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeComponent from '../HomeComponent/HomeComponent'
import WorksComponent from '../WorksComponent/WorksComponent'
import InterestComponent from '../InterestComponent/InterestComponent'
import StoryComponent from '../StoryComponent/StoryComponent'

import { LinkStyles, Footer } from './FooterComponent.css'

const FooterComponent = () => (
  <footer className={Footer}>
    <ul>
      <li>
        © 2018 Copyright Jason Brown
      </li>
      <NavLink exact to='/' component={HomeComponent} className={LinkStyles}>
        Home
      </NavLink>
      <NavLink to='/Story' component={StoryComponent} className={LinkStyles}>
        Story
      </NavLink>
      <NavLink to='/Works' component={WorksComponent} className={LinkStyles}>
        Works
      </NavLink>
      <NavLink
        to='/Interests'
        component={InterestComponent}
        className={LinkStyles}
      >
        Interests
      </NavLink>
    </ul>
  </footer>
)

export default FooterComponent
