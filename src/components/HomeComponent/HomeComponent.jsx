import React, { Component } from 'react';
import media from 'styled-media-query';

import HeadShot from './HeadShot/HeadShot';
import Biography from './BiographyComponent/Biography';
import styled, { keyframes } from 'styled-components';
import InterestList from './InterestList/InterestList';

const rotate = keyframes`
  from { transform: rotateX(0deg); }
  to { transform: rotateX(-360deg); }
`;

class HomeComponent extends Component {
  render () {
    const Outer = styled.div`
      height: 100vh;
      width: 100%;
      display: inline-flex;
      flex-direction: row;
      padding-top: 3em;
      background-image: url(${this.props.background});
      background-size: cover;
      background-repeat: repeat;
      transition: background-image 0.2s ease-in-out;
      ${media.between('medium', 'large')`
        flex-direction: column;
        height: 100%;
        margin: auto;
        width: 100%;
      `}
      ${media.lessThan('medium')`
        flex-direction: column;
        height: 100%;
        width: 100%;
        margin: auto;
        background-size: cover;
        background-repeat: repeat;
      `}
    `;

    const OuterWrap = styled.div`
      width: 100%;
    `;

    const Inner = styled.div`
      display: flex;
      padding-top: 4em;
      height: 100%;
      width: 100%;
      ${media.between('medium', 'large')`
        flex-direction: column;
        margin: auto;
        height: 80%;
        width: 80%;
      `}
        ${media.lessThan('medium')`
        flex-direction: column;
        margin: auto;
        height: 80%;
        width: 80%;
      `}
    `;

    const Wrapper = styled.div`
      display: flex;
      justify-content: space-between;
      margin-left: 100px;
      ${media.between('medium', 'large')`
        flex-direction: column;
        justify-content: center;
        height: 100%;
        width: 100%;
        margin: 0px;
      `}
      ${media.lessThan('medium')`
        flex-direction: column;
        justify-content: center;
        height: 100%;
        width: 100%;
        margin: 0px;
      `}
    `;

    const Header = styled.h2`
      text-shadow: 10px 0 10px black;
      font-size: 85px;
      display: flex;
      justify-content: center;
      flex-direction: row;
      height: 20%;
      width: 100%;
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
      <Outer>
        <OuterWrap>
          <div>
            <Header>Jason Brown</Header>
          </div>
          <Wrapper>
            <Inner>
              <InterestList />
            </Inner>
            <Inner>
              <HeadShot />
            </Inner>
            <Inner>
              <Biography />
            </Inner>
          </Wrapper>
        </OuterWrap>
      </Outer>
    );
  }
}

export default HomeComponent;
