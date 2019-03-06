import React, { Component } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

class ContactComponent extends Component {
  render () {
    const Outer = styled.div`
      height: 100vh;
      width: 100%;
      display: inline-flex;
      flex-direction: column;
      margin: auto;
      background-image: url(${this.props.background});
      background-repeat: repeat;
      background-size: cover;
      transition: background-image 0.2s ease-in-out;
      padding: 7em;
      ${media.between('medium', 'large')`
        flex-direction: column;
        height: 100vh;
        width: 100%;
        padding: 5em;
      `}
      ${media.lessThan('medium')`
        flex-direction: column;
        height: 100vh;
        width: 100%;
        padding: 3em;
        padding-top: 5em;
      `}
    `;

    const Contact = styled.div`
      display: flex;
      flex-direction: column;
      background: lightgrey;
      border-radius: 15px;
      width: 100%;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.6), 0 6px 20px 0 rgba(0,0,0,0.6);
      ${media.between('medium', 'large')`
        flex-direction: column;
        width: 100%;
      `}
      ${media.lessThan('medium')`
        flex-direction: column;
        width: 100%;
      `}
    `;

    const List = styled.li`
      width: 100%;
      margin: auto;
      display: flex;
      text-decoration: none !important;
      list-style: none !important;
      flex-direction: column;
      ${media.between('medium', 'large')`
        flex-direction: column;
        margin: auto;
        width: 100%;
      `}
      ${media.lessThan('medium')`
        flex-direction: column;
        margin: auto;
        width: 100%;
      `}
    `;

    const Header2 = styled.h2`
      text-style: italic;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding-left: 15px;
      border-bottom: 1px solid black;
      ${media.between('medium', 'large')`
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-left: 5px;
      `}
      ${media.lessThan('medium')`
        flex-direction: column;
        width: 100%;
        padding-left: 5px;
      `}
    `;

    const Header1 = styled.h3`
      text-style: italic;
      margin-left: 30px;
      display: flex;
      ${media.between('medium', 'large')`
        flex-direction: column;
        width: 100%;
      `}
      ${media.lessThan('medium')`
        flex-direction: column;
        width: 100%;
      `}
    `;

    const Paragraph = styled.p`
      font-size: 17px;
      display: flex;
      flex-direction: column;
      width: 100%;
      text-align: right;
      ${media.between('medium', 'large')`
        flex-direction: column;
        width: 100%;
      `}
      ${media.lessThan('medium')`
        flex-direction: column;
        width: 100%;
      `}
    `;

    const Link = styled.a`
      color: black;
      display: flex;
      flex-direction: column;
      width: 100%;
      text-decoration: none !important;
      list-style: none !important;
      &:hover {
        color: white;
      }
      ${media.between('medium', 'large')`
        flex-direction: column;
        width: 100%;
      `}
      ${media.lessThan('medium')`
        flex-direction: column;
        width: 100%;
      `}
    `;

    const Interest = styled.div`
      display: flex;
      flex-direction: column;
      background: lightgrey;
      border-radius: 15px;
      width: 100%;
      margin: auto;
      margin-top: 25px;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.6), 0 6px 20px 0 rgba(0,0,0,0.6);
      ${media.between('medium', 'large')`
        flex-direction: column;
        width: 100%;
      `}
      ${media.lessThan('medium')`
        flex-direction: column;
        width: 100%;
      `}
    `;

    const InterestContactList = styled.li`
      width: 80%;
      margin: auto;
      text-decoration: none !important;
      list-style: none !important;
      flex-direction: column;
      ${media.between('medium', 'large')`
        flex-direction: column;
      `}
      ${media.lessThan('medium')`
        flex-direction: column;
        width: 60%;
      `}
    `;

    return (
      <Outer>
        <Contact>
          <List>
            <Header2>Contact Information</Header2>
            <Header1>
              LinkedIn:
              <InterestContactList>
                <Paragraph><Link href='https://www.linkedin.com/in/jason-brown-7117a646/'>Jason Brown</Link></Paragraph>
              </InterestContactList>
            </Header1>
            <Header1>
              Gmail:
              <InterestContactList>
                <Paragraph><Link href='mailto:me@jbjbro6@gmail.com'>jbjbro6@gmail.com</Link></Paragraph>
              </InterestContactList>
            </Header1>
          </List>
        </Contact>
        <Interest>
          <List>
            <Header2>Interests</Header2>
            <Header1>
              Gaming:
              <InterestContactList>
                <Paragraph><Link href='https://steamcommunity.com/profiles/76561198112819248/'>Steam</Link></Paragraph>
              </InterestContactList>
            </Header1>
          </List>
        </Interest>
      </Outer>
    );
  }
}

export default ContactComponent;
