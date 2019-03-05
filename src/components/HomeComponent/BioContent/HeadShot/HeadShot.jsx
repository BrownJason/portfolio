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
      padding: 10px;
      height: 400px;
      display: flex;
      flex-direction: column;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6),
        0 6px 20px 0 rgba(0, 0, 0, 0.6);
      border-radius: 10px;
      ${media.between('medium', 'large')`
        height: 50vh;
        width: 50vw;
      `}
      ${media.lessThan('medium')`
        height: 100%;
        width: 100%;
      `}
    `;

    const ResumeOuter = styled.div`
      display: flex;
      background: white;
      height: 100%;
      width: 100%;
      background-image: url(${headshot});
      background-repeat: no-repeat;
      background-size: cover;
      paddingt-bottom: -20px;
      margin: auto;
      margin-bottom: -25px;
    `;

    const Headshot = styled.div`
      width: 100%;
      height: 400px;
      ${media.between('medium', 'large')`
        height: 50vh;
        width: 50vw;
      `}
      ${media.lessThan('medium')`
        height: 100%;
        width: 100%;
      `}
    `;

    const Resume = styled.a`
      padding-top: 10px;
      margin-top: 25px;
      color: black;
      text-align: center;
      text-decoration: none;
      link-style: none;
      link-decoration: none;
    `;
    return (
      <Outer>
        <ResumeOuter>
          <Headshot />
        </ResumeOuter>
        <Resume href={resume} alt="">Resume</Resume>
      </Outer>
    );
  }
}

export default HeadShot;
