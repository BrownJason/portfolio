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
  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    margin-top: 150px;
    width: 100%;
  `}
`;

const OuterDiv = styled.div`
  ${media.lessThan('medium')`
    justify-content: center;
    flex-direction: column;
    margin-top: 25px;
    margin-bottom: 25px;
    width: 100%;
    height: 65%;
  `}
`;

class BioContent extends React.Component {
  render () {
    return (
      <Outer>
        <InterestList />
        <OuterDiv>
          <HeadShot />
        </OuterDiv>
        <Biography />
      </Outer>
    );
  }
}

export default BioContent;
