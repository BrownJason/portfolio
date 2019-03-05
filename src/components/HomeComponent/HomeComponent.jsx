import React, { Component } from 'react';
import BioContent from './BioContent/BioContent';
import styled from 'styled-components';
import media from 'styled-media-query';

class HomeComponent extends Component {
  render () {
    const Outer = styled.div`
      height: 100vh;
      width: 100%;
      margin: auto;
      background-image: url(${this.props.imgs});
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
