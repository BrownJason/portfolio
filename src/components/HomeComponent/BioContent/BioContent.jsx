import React from 'react';
import InterestList from './InterestList/InterestList';
import HeadShot from './HeadShot/HeadShot';
import Biography from './BiographyComponent/Biography';
import styled from 'styled-components';
import media from 'styled-media-query';

const Outer = styled.div`
  height: 80vh;
  margin-top: 50px;
  margin-left: 40px;
  margin-right: 40px;
  display: flex;
  justify-content: space-between;
  ${media.lessThan('small')`
    flex-direction: column;
    height: 100%;
  `}
`;

class BioContent extends React.Component {
  render () {
    return (
      <Outer>
        <InterestList />
        <HeadShot />
        <Biography />
      </Outer>
    );
  }
}

export default BioContent;
