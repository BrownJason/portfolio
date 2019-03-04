import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import Modules from './Modules/Modules';

class WorksComponent extends React.Component {
  render () {
    const Outer = styled.div`
      height: 100vh;
      width: 100%;
      display: flex;
      justify-content: center;
      padding-top: 3em;
      background-image: url(${this.props.img});
      background-size: cover;
      background-repeat: repeat;
      transition: background-image 0.2s ease-in-out;
      ${media.between('medium', 'large')`
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

    const Works = styled.div`
      display: flex;
      padding: 1em;
      padding-top: 4em;
      height: 100%;
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
    return (
      <Outer>
        <Works>
          {this.props.modules.map(modules => (
            <Modules
              key={modules.h3}
              headerText={modules.h3}
              icon={modules.title}
              pBefore={modules.pBeforeBr}
              pAfter={modules.pAfterBr}
              link={modules.link}
              img={modules.img}
            />
          ))}
        </Works>
      </Outer>
    );
  }
}

export default WorksComponent;
