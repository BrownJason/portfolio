import React from 'react';
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
      display: inline-flex;
      height: 44px;
      width: 100%;
      position: fixed;
      z-index: 1002;
      background: black;
    `;

    const Para = styled.div`
      color: white;
      text-align: center;
      width: 100%;
      justifty-content: flex-end;
    `;

    const Icon = styled.img`
      margin-top: 7px;
      height: 30px;
    `;

    const Spacer = styled.div`
      width: 15px;
      margin-top: 10px;
      margin-left: 10px;
    `;

    return (
      <Outer>
        <CheeseburgerMenu
          isOpen={this.state.menuOpen}
          closeCallback={this.closeMenu.bind(this)}
        >
          <MenuContent closeCallback={this.closeMenu.bind(this)} />
        </CheeseburgerMenu>
        <Spacer>
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
        </Spacer>
        <Para><a href="https://reactjs.org/docs/hello-world.html"><Icon src={icon} alt="" /></a></Para>
      </Outer>
    );
  }
}

export default NavbarPage;
