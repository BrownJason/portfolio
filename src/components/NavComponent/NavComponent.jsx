import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(NavLink)`
  font-size: 14pt;
  padding-left: 10px;
  text-decoration: none;
  list-style: none;
  color: black;

`;

const Outer = styled.div`
  backface-visibility: hidden;
  background: white;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
`;

const NavBar = styled.nav`
  height: 50px;
  display: flex;
  justify-content: flex-start;
  margin: auto;
  border-bottom: 5px solid black;
`;

const UList = styled.ul`
  display: inline-flex;
  margin-top: 10px;
`;

class NavComponent extends Component {
  render () {
    return (
      <Outer>
        <NavBar>
          <UList>
            <Link
              exact
              to={'/'}
              activeStyle={{ color: 'blue' }}
            >
              <i className="fa fa-home">&nbsp;&nbsp;Home</i>
            </Link>
            <Link
              exact
              to={'/Story'}
              activeStyle={{ color: 'blue' }}
            >
              <i className="fa fa-book">&nbsp;&nbsp;Story</i>
            </Link>
            <Link
              exact
              to={'/Works'}
              activeStyle={{ color: 'blue' }}
            >
              <i className="fa fa-archive">&nbsp;&nbsp;Works</i>
            </Link>
            <Link
              exact
              to={'/Interests'}
              activeStyle={{ color: 'blue' }}
            >
              <i className="fa fa-gamepad">&nbsp;&nbsp;Interests</i>
            </Link>
          </UList>
        </NavBar>
      </Outer>
    );
  }
}

export default NavComponent;
