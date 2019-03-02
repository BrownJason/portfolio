import React, { Component } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

import Questions from './Questions/Questions';

const InnerStore = styled.div`
  padding: 1em;
  background: white;
  border-radius: 15px;
  height: 100%;
  width: 100%;
  ${media.lessThan('medium')`
    padding: 1em;
    margin-left: -15px;
    height: 100%;
    width: 100%;
  `}
`;

const BackgroundImg = styled.div`
  display: flex;
  background-image: ${props => (props.imgs ? 'orange' : 'black')};
  background-repeat: no-repeat;
  background-size: cover;
  padding: 4em;
  height: 100vh;
  width: 100%;
  ${media.lessThan('medium')`
    height: 100%;
    width: 100%;
  `}
`;

class StoryComponent extends Component {
  render () {
    return (
      <BackgroundImg>
        <InnerStore>
          <ul>
            {this.props.questions.map(question => (
              <Questions
                key={question.h3}
                headerText={question.h3}
                pText={question.p}
                beforeLink={question.beforeLink}
                link={question.links}
                linkText={question.linkText}
                afterLink={question.afterLink}
              />
            ))}
          </ul>
        </InnerStore>
      </BackgroundImg>
    );
  }
}

export default StoryComponent;
