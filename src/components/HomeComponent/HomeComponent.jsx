import React, { Component } from 'react';
import BioContent from './BioContent/BioContent';
import styled from 'styled-components';
import media from 'styled-media-query';

import bkgImage from '../../images/background.jpg';

const background = TargetComponent => (strs, ...exprs) =>
  class extends React.Component {
    interpolateStyle () {
      const style = exprs.reduce((result, expr, index) => {
        const isFunc = typeof expr === 'function';
        const value = isFunc ? expr(this.props) : expr;

        return result + value + strs[index + 1];
      }, strs[0]);

      this.element.setAttribute('style', style);
    }

    componentDidMount () {
      this.interpolateStyle();
    }

    componentDidUpdate () {
      this.interpolateStyle();
    }

    render () {
      return (
        <TargetComponent
          {...this.props}
          ref={element => (this.element = element)}
        />
      );
    }
  };

const Outer = background('div')`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px 0 0;
  background-image: url(${bkgImage});
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
