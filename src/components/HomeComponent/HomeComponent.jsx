import React, { Component } from 'react';
import BioContent from './BioContent/BioContent';
import styled from 'styled-components';
import media from 'styled-media-query';

import bkgImage from '../../images/background.jpg';

class HomeComponent extends Component {
  render () {
    const Outer = styled.div`
      height: 90%;
      width: 100%;
      display: inline-flex;
      padding-bottom: -60px;
      padding-top: 50px;
      background-image: url(${bkgImage});
      z-index: 1002; 
      ${media.between('medium', 'large')`
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-image: url(${bkgImage});
        background-size: cover;
        margin: auto;
        height: 100%;
        width: 100%;
      `}
      ${media.lessThan('medium')`
        text-align: center;
        height: 100%;
        width: 100%;
      `}
    `;

    const OuterContent = styled.div`
      height: 75%;
      width: 100%;
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
