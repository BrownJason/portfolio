import React, { Component } from 'react';
import classes from './NavComponent.css';
import { NavLink } from 'react-router-dom';

class NavComponent extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    if (isMobile) {
      return (
        <div className={classes.TopNavMobile}>
          <nav className={classes.NavBarMobile}>
            <ul>
              <NavLink
                exact
                to={'/'}
                activeStyle={{ color: 'blue' }}
                className={classes.LinkStylesMobile}
              >
                <i className="fa fa-home">&nbsp;&nbsp;Home</i>
              </NavLink>
              <NavLink
                exact
                to={'/Story'}
                activeStyle={{ color: 'blue' }}
                className={classes.LinkStylesMobile}
              >
                <i className="fa fa-book">&nbsp;&nbsp;Story</i>
              </NavLink>
              <NavLink
                exact
                to={'/Works'}
                activeStyle={{ color: 'blue' }}
                className={classes.LinkStylesMobile}
              >
                <i className="fa fa-archive">&nbsp;&nbsp;Works</i>
              </NavLink>
              <NavLink
                exact
                to={'/Interests'}
                activeStyle={{ color: 'blue' }}
                className={classes.LinkStylesMobile}
              >
                <i className="fa fa-gamepad">&nbsp;&nbsp;Interests</i>
              </NavLink>
            </ul>
          </nav>
        </div>
      );
    } else {
      return (
        <div className={classes.TopNav}>
          <nav className={classes.NavBar}>
            <ul>
              <NavLink
                exact
                to={'/'}
                activeStyle={{ color: 'blue' }}
                className={classes.LinkStyles}
              >
                <i className="fa fa-home">&nbsp;&nbsp;Home</i>
              </NavLink>
              <NavLink
                exact
                to={'/Story'}
                activeStyle={{ color: 'blue' }}
                className={classes.LinkStyles}
              >
                <i className="fa fa-book">&nbsp;&nbsp;Story</i>
              </NavLink>
              <NavLink
                exact
                to={'/Works'}
                activeStyle={{ color: 'blue' }}
                className={classes.LinkStyles}
              >
                <i className="fa fa-archive">&nbsp;&nbsp;Works</i>
              </NavLink>
              <NavLink
                exact
                to={'/Interests'}
                activeStyle={{ color: 'blue' }}
                className={classes.LinkStyles}
              >
                <i className="fa fa-gamepad">&nbsp;&nbsp;Interests</i>
              </NavLink>
            </ul>
          </nav>
        </div>
      );
    }
  }
}

export default NavComponent;
