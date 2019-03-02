import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import Modules from './Modules/Modules';



class WorksComponent extends React.Component {
  render () {
  const Outer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 3em;
    ${media.lessThan('medium')`
      flex-direction: column;
      padding-top: 2em;
      height: 100%;
      width: 100%;
    `}
  `;

  const Works = styled.div`
    display: flex;
    padding: 1em;
    padding-top: 4em;
    ${media.lessThan('medium')`
      flex-direction: column;
      padding-top: 4em;
      height: 100%;
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
              img={this.props.images[this.props.index]}
            >
              {modules.h3}
            </Modules>
          ))}
        </Works>
      </Outer>
    );
  }
}

export default WorksComponent;
