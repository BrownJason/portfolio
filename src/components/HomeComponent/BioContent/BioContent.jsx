import React, { Fragment } from 'react';
import InterestList from './InterestList/InterestList';
import HeadShot from './HeadShot/HeadShot';
import Biography from './BiographyComponent/Biography';
import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';

const rotate = keyframes`
  from { transform: rotateX(0deg); }
  to { transform: rotateX(-360deg); }
`;

class BioContent extends React.Component {
  render () {
    const Background = styled.div`
      width: 100%;
    `;

    const Outer = styled.div`
      margin: auto;
      margin-top: 150px;
      display: flex;
      justify-content: space-between;
      ${media.between('medium', 'large')`
        flex-direction: column;
        justify-content: center;
        margin: auto;
        margin-top: 150px;
        height: 80vh;
        width: 100%;
      `}
      ${media.lessThan('medium')`
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
        margin-top: 150px;
        height: 80vh;
        width: 100%;
      `}
    `;

    const OuterDiv = styled.div`
      ${media.between('medium', 'large')`
        flex-direction: column;
        margin-bottom: 175px;
        width: 100%;
        height: 20%;
      `}
      ${media.lessThan('medium')`
        flex-direction: column;
        margin: auto;
        margin-bottom: 100px;
        width: 100%;
        height: 50%;
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

    const Header = styled.h2`
      display: flex;
      text-shadow: 10px 0 10px black;
      font-size: 85px;
      display: flex;
      justify-content: center;
      text-align: center;
      color: white;
      &:hover {
        animation: ${rotate} infinite 1s linear;
      }
      ${media.between('medium', 'large')`
        flex-direction: column;
        height: 100%;
        width: 100%;
      `}
      ${media.lessThan('medium')`
        display: flex;
        flex-direction: column;
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
          <div>
            <InterestList />
          </div>
          <OuterDiv>
            <HeadShot />
          </OuterDiv>
          <div>
            <Biography />
          </div>
        </Outer>
      </Background>
    );
  }
}

export default BioContent;
