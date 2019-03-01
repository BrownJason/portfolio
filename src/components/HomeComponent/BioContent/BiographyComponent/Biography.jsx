import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

import pdf from '../../../../documents/bio.docx';

const Paragraph = styled.p`
  width: 100%;
`;

const BioRight = styled.div`
  float: right;
  margin: 10px;
  width: 500px;
  height: 300px;
  background: rgba(255,255,255,0.8);
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.6), 0 6px 20px 0 rgba(0,0,0,0.6);
  border-radius: 10px;
  ${media.lessThan('medium')`
    flex-direction: column;
    background: rgba(255,255,255,0.9);
    margin-top: 10px;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 60px;
    padding: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.6), 0 6px 20px 0 rgba(0,0,0,0.6);
    height: 100%;
    width: 100%;
    border-radius: 10px;
  `}
`;

const Bio = styled.div`
  position: relative;
  display: inline-block;
`;

const Header = styled.h2`
  color: black;
`

const Span = styled.span``

class Biography extends React.Component {
  render () {
    return (
      <BioRight>
        <div>
          <a href={pdf} target="_blank">
            <Bio>
              <Header>
                <i className={`fa fa-file`} />
                <Span> Biography</Span>
              </Header>
            </Bio>
          </a>
          <Paragraph>
            Jason Brown was raised in Wayne, MI, a suburb of Detroit. He was
            an avid gamer and reader from a young age; where he would pursue
            the creative side of video games, reading, and learning to draw.
            He gained interest in coding through playing videos at his
            grandparents place on the weekends with his cousins. While in
            college, pursuing an Computer Science degree, he self-studied
            programming languages to help purse creating video games. Jason
            enrolled in the FastTrack’D program to jumpstart his career in
            this ever exciting and expanding field. In his free time, he
            enjoys gaming with friends, contemplating how game logic is coded,
            bowling and golfing with family, and donating to charity.
          </Paragraph>
        </div>
      </BioRight>
    );
  }
}

export default Biography;
