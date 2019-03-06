import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

import resume from '../../../documents/Resume.pdf';

import headshot from '../../../images/JBrown.jpg';

class HeadShot extends React.Component {
  render () {
    const Outer = styled.div`
    background: white;
    border-radius: 15px;
    padding: 10px;
    text-decoration: none;
    justify-content: center;
    width: 32em;
    margin: auto;
    margin-left: 25px;
    margin-top: 0;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.6), 0 6px 20px 0 rgba(0,0,0,0.6);
    ${media.between('medium', 'large')`
      height: 100%;
      padding: 10px;
      margin: auto;
      margin-bottom: 50px;
      text-decoration: none;
      width: 100%;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.6), 0 6px 20px 0 rgba(0,0,0,0.6);
    `}
    ${media.lessThan('medium')`
      height: 100%;
      padding: 10px;
      margin: auto;
      margin-bottom: 50px;
      text-decoration: none;
      width: 100%;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.6), 0 6px 20px 0 rgba(0,0,0,0.6);
    `}
    `;

    const Link = styled.a`
      color: black;
      text-decoration: none;
      &:hover {
        text-decoration: none;
      }
    `;
    const Image = styled.img`
    width: 100%;
    ${media.lessThan('medium')`
      width: 100%;
    `}
  `;
    return (
      <Outer>
        <Link href={`${resume}`}>
          <Image src={`${headshot}`} alt="" />
        </Link>
      </Outer>
    );
  }
}

export default HeadShot;
