import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

import resume from '../../../../documents/Resume.pdf';

import headshot from '../../../../images/JBrown.jpg';

class HeadShot extends React.Component {
  render () {
    const Outer = styled.div`
      width: 400px;
      margin: auto;
      background: white;
      padding: 20px;
      height: 400px;
      display: flex;
      display: inline-flex;
      float: right;
      flex-direction: column;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6),
        0 6px 20px 0 rgba(0, 0, 0, 0.6);
      border-radius: 10px; 
      background-image: url(${headshot});
      background-repeat: no-repeat;
      background-size: cover;
      border: 10px solid white;
      ${media.between('medium', 'large')`
        height: 100%;
        width: 100%;
      `}
      ${media.lessThan('medium')`
        height: 100%;
        width: 100%;
      `}
    `;

    const Headshot = styled.div`
      width: 100%;
      float: right;
      ${media.between('medium', 'large')`
        height: 100%;
        width: 100%;
      `} 
      ${media.lessThan('medium')`
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
    return (
      <Outer>
        <Resume href={resume}>
          <Headshot />
        </Resume>
      </Outer>
    );
  }
}

export default HeadShot;
