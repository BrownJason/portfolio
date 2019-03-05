import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';

class InterestComponent extends Component {
  render () {
    const Container = styled.div`
      position: relative;
      padding-top: 56.25%; /* 720 / 1280 = 0.5625 */
      background: white;
    `;

    // const InnerContaitner = styled.div`
    //   background-image: url(${this.props.image});
    //   background-size: cover;
    //   margin: auto;
    //   height: 100%;
    //   width: 100%;
    //   ${media.lessThan('medium')`
    //     background-image: url(${this.props.image});
    //     background-repeat: repeat-y;
    //     margin: auto;
    //     margin-top: 50px;
    //     margin-bottom: -50px;
    //     height: 30%;
    //     width: 100%;
    //   `}
    // `;

    // const AnotherImg = styled.div`
    // ${media.lessThan('medium')`
    //     background-image: url(${this.props.image});
    //     background-size: cover;
    //     background-repeat: repeat-y;
    //     margin: auto;
    //     margin-top: 50px;
    //     margin-bottom: -50px;
    //     height: 30%;
    //     width: 100%;
    //   `}
    // `;
    return (
      <Container />
    );
  }
}

export default InterestComponent;
