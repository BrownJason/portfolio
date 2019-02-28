import React from 'react'
import { NavLink } from 'react-router-dom'

import { LinkStyles, Footer } from './FooterComponent.css'

const FooterComponent = () => (
  <footer className={Footer}>
    <ul>
      <li>
        © 2018 Copyright Jason Brown
      </li>
      {/* <NavLink
        exact
        to='/'
        className={LinkStyles}
        activeStyle={{ color: 'blue' }}
      >
        Home
      </NavLink>
      <NavLink
        to='/Story'
        className={LinkStyles}
        activeStyle={{ color: 'blue' }}
      >
        Story
      </NavLink>
      <NavLink
        to='/Works'
        className={LinkStyles}
        activeStyle={{ color: 'blue' }}
      >
        Works
      </NavLink>
      <NavLink
        to='/Interests'
        className={LinkStyles}
        activeStyle={{ color: 'blue' }}
      >
        Interests
      </NavLink> */}
    </ul>
  </footer>
)

export default FooterComponent
