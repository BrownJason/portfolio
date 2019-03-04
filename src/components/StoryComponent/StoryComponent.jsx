import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';

import Questions from './Questions/Questions';

class StoryComponent extends Component {

  render () {
    const InnerStore = styled.div`
      padding: 1em;
      background: lightgrey;
      border-radius: 15px;
      width: 100%;
      margin: auto;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.6), 0 6px 20px 0 rgba(0,0,0,0.6);
      ${media.between('medium', 'large')`
        display: flex;
        flex-direction: column;
        padding: 1em;
        margin: auto;
        height: 100%;
        width: 100%;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.6), 0 6px 20px 0 rgba(0,0,0,0.6);
      `}
      ${media.lessThan('medium')`
        margin: auto;
        margin-top: 50px;
        margin-bottom: 50px;
        height: 100%;
        width: 100%;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.6), 0 6px 20px 0 rgba(0,0,0,0.6);
      `}
    `;
    const BackgroundImg = styled.div`
      display: flex;
      background-image: url(${this.props.imgs});
      background-repeat: no-repeat;
      background-size: cover;
      padding: 7em;
      height: 100vh;
      width: 100%;
      animation: ease-in infinite linear;
      ${media.between('medium', 'large')`
        display: flex;
        flex-direction: column;
        background-size: cover;
        padding: 5em;
        height: 100vh;
        width: 100%;
      `}
      ${media.lessThan('medium')`
        height: 100%;
        width: 100%;
        padding: 3em;
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
