import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import Modules from './Modules/Modules';

const Outer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 3em;
  ${media.lessThan('small')`
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
  ${media.lessThan('small')`
    flex-direction: column;
    padding-left: 2em;
    padding-right: 2em;
    padding-top: 4em;
    height: 100%;
    width: 70%;
  `}
`;

class WorksComponent extends React.Component {
  render () {
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
