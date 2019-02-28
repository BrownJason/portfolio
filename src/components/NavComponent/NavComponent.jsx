import React, { Component } from 'react'
import { NavBar, TopNav, LinkStyles } from './NavComponent.css'
import { NavLink } from 'react-router-dom'

class NavComponent extends Component {
  render () {
    return (
      <div className={TopNav}>
        <nav className={NavBar}>
          <ul>
            <NavLink
              exact
              to={process.env.PUBLIC_URL + '/'}
              activeStyle={{ color: 'blue' }}
              className={LinkStyles}
            >
              <i className='fa fa-home'>&nbsp;&nbsp;Home</i>
            </NavLink>
            <NavLink
              exact
              to={process.env.PUBLIC_URL + '/Story'}
              activeStyle={{ color: 'blue' }}
              className={LinkStyles}
            >
              <i className='fa fa-book'>&nbsp;&nbsp;Story</i>
            </NavLink>
            <NavLink
              exact
              to={process.env.PUBLIC_URL + '/Works'}
              activeStyle={{ color: 'blue' }}
              className={LinkStyles}
            >
              <i className='fa fa-archive'>&nbsp;&nbsp;Works</i>
            </NavLink>
            <NavLink
              exact
              to={process.env.PUBLIC_URL + '/Interests'}
              activeStyle={{ color: 'blue' }}
              className={LinkStyles}
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
