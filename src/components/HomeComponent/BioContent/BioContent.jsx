import React, { Fragment } from 'react';
import InterestList from './InterestList/InterestList';
import HeadShot from './HeadShot/HeadShot';
import Biography from './BiographyComponent/Biography';
import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';

class BioContent extends React.Component {
  render () {
    const Background = styled.div`
      margin: auto;
    `;

    const Outer = styled.div`
      height: 80vh;
      margin-top: 50px;
      margin-left: 40px;
      margin-right: 40px;
      display: flex;
      justify-content: space-between;
        ${media.between('medium', 'large')`
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: auto;
      margin-top: 25px;
      width: 100%;
    `}
      ${media.lessThan('medium')`
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
        margin-top: 175px;
        width: 100%;
      `}
    `;

    const OuterDiv = styled.div`
      ${media.lessThan('medium')`
        justify-content: center;
        flex-direction: column;
        margin-top: 25px;
        margin-bottom: 25px;
        width: 100%;
        height: 65%;
      `}
    `;

    const AboutMe = styled.div`
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: center;
      ${media.between('medium', 'large')`
        flex-direction: column;
        justify-content: center;
        height: 100%;
        width: 100%;
      `}
      ${media.lessThan('medium')`
        flex-direction: column;
        justify-content: center;
        height: 100%;
        width: 100%;
      `}
    `;

    const rotate = keyframes`
      from { transform: rotateX(0deg); }
      to { transform: rotateX(-360deg); }
    `;

    const Header = styled.h2`
      display: flex;
      text-shadow: 5px 0 5px black;
      font-size: 85px;
      display: flex;
      justify-content: center;
      color: white;
      &:hover {
        animation: ${rotate} infinite 1s linear;
      }
      ${media.between('medium', 'large')`
        flex-direction: column;
        font-size: 85px;
        text-align: center;
        text-shadow: 5px 0 5px  black;
        height: 100%;
        width: 100%;
      `}
      ${media.lessThan('medium')`
        display: flex;
        flex-direction: column;
        text-align: center;
        text-shadow: 5px 0 5px  black;
        font-size: 55px;
        height: 100%;
        width: 100%;
      `}
    `;
    return (
      <Background>
        <AboutMe>
          <Header>Jason Brown</Header>
        </AboutMe>
        <Outer>
          <InterestList />
          <OuterDiv>
            <HeadShot />
          </OuterDiv>
          <Biography />
        </Outer>
      </Background>
    );
  }
}

export default BioContent;
