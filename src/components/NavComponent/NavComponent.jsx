import React, { Component } from 'react';
import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';
import MenuContent from './MenuContent';
import styled from 'styled-components';
import icon from '../../icon.ico';

class NavbarPage extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      menuOpen: false
    };
  }

  openMenu () {
    this.setState({ menuOpen: true });
  }

  closeMenu () {
    this.setState({ menuOpen: false });
  }

  render () {
    const Outer = styled.div`
      height: 27px;
      width: 100%;
      position: fixed;
      z-index: 1002;
      background: black;
      display: flex;
    `;

    const Para = styled.div`
      color: white;
      text-align: center;
      width: 100%;
      justifty-content: flex-end;
    `;

    const Icon = styled.img`
      height: 25px;
    `;

    return (
      <Outer>
        <CheeseburgerMenu
          isOpen={this.state.menuOpen}
          closeCallback={this.closeMenu.bind(this)}
        >
          <MenuContent closeCallback={this.closeMenu.bind(this)} />
        </CheeseburgerMenu>
        <HamburgerMenu
          isOpen={this.state.menuOpen}
          menuClicked={this.openMenu.bind(this)}
          width={32}
          height={24}
          strokeWidth={3}
          rotate={0}
          color='white'
          borderRadius={0}
          animationDuration={0.5}
        />
        <Para><a href="https://reactjs.org/docs/hello-world.html"><Icon src={icon} alt="" /></a></Para>
      </Outer>
    );
  }
}

export default NavbarPage;
