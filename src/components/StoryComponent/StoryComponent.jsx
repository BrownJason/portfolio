import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';

import Questions from './Questions/Questions';

class StoryComponent extends Component {

  render () {
    const InnerStore = styled.div`
      padding: 1em;
      background: white;
      border-radius: 15px;
      width: 100%;
      ${media.between('medium', 'large')`
      display: flex;
      flex-direction: column;
      padding: 1em;
      margin-left: -15px;
      height: 100vh;
      width: 100%;
    `}
      ${media.lessThan('medium')`
      padding: 1em;
      margin-left: -15px;
      height: 100%;
      width: 100%;
    `}
    `;
    const BackgroundImg = styled.div`
      display: flex;
      background-image: url(${this.props.imgs});
      background-repeat: no-repeat;
      background-size: cover;
      padding: 4em;
      height: 100vh;
      width: 100%;
      animation: ease-in infinite linear;
      ${media.between('medium', 'large')`
      display: flex;
      flex-direction: column;
      background-size: cover;
      height: 100vh;
      width: 100%;
    `}
      ${media.lessThan('medium')`
    height: 100%;
    width: 100%;
  `}
    `;
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
