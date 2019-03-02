import React, { Component } from 'react';
import BioContent from './BioContent/BioContent';
import styled from 'styled-components';
import media from 'styled-media-query';

import bkgImage from '../../images/background.jpg';

class HomeComponent extends Component {
  render () {
    const Outer = styled.div`
      height: 100vh;
      width: 100%;
      display: inline-flex;
      padding-bottom: -60px;
      padding-top: 50px;
      background-image: url(${bkgImage});
      background-size: cover;
      ${media.between('medium', 'large')`
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        width: 100%;
      `}
      ${media.lessThan('medium')`
        text-align: center;
        height: 100%;
        width: 100%;
      `}
    `;

    const OuterContent = styled.div`
      height: 100%;
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
