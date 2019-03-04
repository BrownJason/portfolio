import React, { Component } from 'react';
import BioContent from './BioContent/BioContent';
import styled from 'styled-components';
import media from 'styled-media-query';
import FadeThrough from 'react-fadethrough';

class HomeComponent extends Component {
  render() {
    const Outer = styled.div`
      height: 100%;
      width: 100%;
      display: flex;
      ${media.between('medium', 'large')`
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
        height: 100%;
        width: 100%;
      `}
      ${media.lessThan('medium')`
        flex-direction: column;
        text-align: center;
        margin: auto;
        height: 100%;
        width: 100%;
      `}
    `;

    const OuterContent = styled.div`
      display: flex;
      padding-top: 50px;
      height: 100%;
      width: 100%;
      background-repeat: repeat;
      background-size: cover;
      background-image: url(${this.props.imgs});
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
