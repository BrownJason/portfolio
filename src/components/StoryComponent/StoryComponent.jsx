import React, { Component } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

import Questions from './Questions/Questions';

import currentImg from '../../images/detroit.jpg';

const InnerStore = styled.div`
  padding: 1em;
  background: white;
  border-radius: 15px;
  height: 100%;
  width: 100%;
  ${media.lessThan('small')`
    padding: 0;
    margin-left: -15px;
    height: 100%;
    width: 100%;
  `}
`;

const BackgroundImg = styled.div`
  display: flex;
  background-image: url(${currentImg});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 4em;
  height: 100vh;
  width: 100%;
  ${media.lessThan('small')`
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
            {console.log(this.props.questions)}
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
