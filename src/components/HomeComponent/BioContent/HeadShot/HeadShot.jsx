import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

import resume from '../../../../documents/Resume.pdf';

import headshot from '../../../../images/JBrown.jpg';

const Outer = styled.div`
  width: 400px;
  margin: 10px 0 0 0;
  background: white;
  padding: 20px;
  height: 400px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  ${media.lessThan('medium')`
    flex-direction: column;
    display: flex;
    height: 100%;
    width: 100%;
  `}
`;

const Headshot = styled.img`
  background-image: url(${headshot});
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 100%;
  ${media.lessThan('medium')`
  background-image: url(${headshot});
    background-repeat: no-repeat;
    background-size: 100%;
    height: 100%;
    width: 100%;
  `}
`;

const Resume = styled.a`
  padding-top: 10px;
  padding-bottom: -10px;
  margin: 0;
  text-align: center;
  text-decoration: none;
  link-style: none;
  link-decoration: none;
`;

class HeadShot extends React.Component {
  render () {
    return (
      <Outer>
        <Headshot />
        <Resume href={resume}>- Link to Resume -</Resume>
      </Outer>
    );
  }
}

export default HeadShot;
