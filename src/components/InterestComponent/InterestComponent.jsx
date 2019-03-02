import React, { Component } from 'react'
import styled from 'styled-components';
import media from 'styled-media-query';

class InterestComponent extends Component {
  render () {
    const Container = styled.div`
      width: 100%;
      height: 100vh;
      margin: auto;
      justify-content: center;
      z-index: 1;
    `;

    const InnerContaitner = styled.div`
      display: flex;
      flex-direction: column;
      z-index: 2;
      background-image: url(${this.props.image});
      background-size: cover;
      margin: auto;
      height: 100%;
      width: 100%;
      ${media.lessThan('medium')`
        flex-direction: column;
        justify-content: center;
        background-repeat: repeat;
        margin: auto;
        height: 100%;
        width: 100%;
      `}
    `;
    return (
      <Container>
        <a href='http://www.pathofexile.com/account/view-profile/Zijesinop'>
          <InnerContaitner>

          </InnerContaitner>
        </a>
      </Container>
    );
  }
}

export default InterestComponent;
