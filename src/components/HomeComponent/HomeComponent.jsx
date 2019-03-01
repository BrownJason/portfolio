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
  background-image: url(${bkgImage});
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 50px 0 0;
  ${media.between('small', 'medium')`
    flex-direction: column;
    background-image: url(${bkgImage});
    background-repeat: repeat;
    background-size: 100%;
    height: 100%;
    width: 100%;
  `}
`;

const OuterContent = styled.div`
  height: 100%;
  width: 100%;
  ${media.lessThan('small')`
    height: 100%;
    width: 100%;
  `}
`;

const AboutMe = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  ${media.lessThan('small')`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
  `}
`;

const Header = styled.h2`
  display: flex;
  text-shadow: 5px 0 5px  black;
  font-size: 85px;
  display: flex;
  margin: 0;
  justify-content: center;
  color: white;
  ${media.lessThan('small')`
    display: flex;
    text-align: center;
    margin: 0;
    text-shadow: 5px 0 5px  black;
    font-size: 55px;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
  `}
`;

class HomeComponent extends Component {
  render () {
    return (
      <Outer>
        <OuterContent>
          <AboutMe>
            <Header>Jason Brown</Header>
          </AboutMe>
          <BioContent />
        </OuterContent>
      </Outer>
    );
  }
}

export default HomeComponent;
