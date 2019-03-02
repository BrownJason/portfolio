import React, { Component } from 'react';
import BioContent from './BioContent/BioContent';
import styled from 'styled-components';
import media from 'styled-media-query';

import bkgImage from '../../images/background.jpg';

const Outer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px 0 0;
  ${media.lessThan('medium')`
    text-align: center;
    height: 100%;
    width: 100%;
  `}
`;

const OuterContent = styled.div`
  height: 100%;
  width: 100%;
  padding: 1em;
`;

class HomeComponent extends Component {
  render () {
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
