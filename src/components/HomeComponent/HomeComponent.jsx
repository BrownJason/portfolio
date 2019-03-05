import React, { Component } from 'react';
import BioContent from './BioContent/BioContent';
import styled from 'styled-components';
import media from 'styled-media-query';

import detroit from '../../images/detroit.jpg';
import detroit2 from '../../images/detroit2.jpg';
import background from '../../images/background.jpg';

class HomeComponent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      backgroundIndex: 1,
      length: 3
    };
    this.imgs = [detroit, detroit2, background];
    this.changeBackground = this.changeBackground.bind(this);
  }
  componentDidMount () {
    this.timeout = setTimeout(this.changeBackground, this.state.length * 2000);
  }

  componentWillUnmount () {
    if (this.timeout) clearTimeout(this.timeout);
  }

  changeBackground () {
    this.setState(
      function ({ backgroundIndex }) {
        const nextBackgroundIndex = ++backgroundIndex % this.imgs.length;

        return { backgroundIndex: nextBackgroundIndex };
      },
      function () {
        this.timeout = setTimeout(
          this.changeBackground,
          this.state.length * 2000
        );
      }
    );
  }
  render () {
    const Outer = styled.div`
      height: 100vh;
      width: 100%;
      margin: auto;
      background-image: url(${this.imgs[this.state.backgroundIndex]});
      background-repeat: no-repeat;
      background-size: cover;
      ${media.between('medium', 'large')`
        flex-direction: column;
        justify-content: center;
        margin: auto;
        height: 100vh;
        width: 100%;
      `}
      ${media.lessThan('medium')`
        flex-direction: column;
        text-align: center;
        margin: auto;
        height: 140vh;
        width: 100%;
      `}
    `;

    const OuterContent = styled.div`
      padding-top: 50px;
      margin: auto;
      height: 100%;
      width: 100%;
      ${media.between('medium', 'large')`
        flex-direction: column;
        justify-content: center;
        margin: auto;
        padding: 3em;
        height: 100%;
        width: 100%;
      `}
      ${media.lessThan('medium')`
        flex-direction: column;
        text-align: center;
        margin: auto;
        padding: 3em;
        height: 100%;
        width: 100%;
      `}
    `;

    return (
      <Outer>
        <OuterContent>
          <BioContent />
        </OuterContent>
      </Outer>
    );
  }
}

export default HomeComponent;
