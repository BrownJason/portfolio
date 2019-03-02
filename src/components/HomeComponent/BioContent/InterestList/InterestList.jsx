import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

class InterestList extends React.Component {
  render () {
    const LinkedList = styled.div`
      margin-top: 50px;
      width: 500px;
      flex-direction: column;
      ${media.between('medium', 'large')`
    flex-direction: column;
    margin-top: 125px;
    margin-bottom: 10px;
    margin-right: -50px;
    margin-left: 20px;
    height: 100%;
    width: 100%;
  `}
      ${media.lessThan('medium')`
  flex-direction: column;
    margin-top: 0px;
    margin-bottom: 10px;
    margin-right: 10px;
    height: 100%;
    width: 100%;
  `}
    `;

    const List = styled.li`
      font-size: 28pt;
      padding-bottom: 5px;
      text-decoration: none !important;
      list-style: none !important;
      margin-left: -50px;
      ${media.lessThan('medium')`
    font-size: 14pt;
    margin-left: -20px;
    padding-bottom: 5px;
    text-decoration: none !important;
    list-style: none !important;
  `}
    `;

    const Right = styled.li`
      font-size: 28pt;
      padding-bottom: 5px;
      float: right;
      margin-right: 15px;
      text-decoration: none !important;
      list-style: none !important;
      ${media.lessThan('medium')`
    font-size: 14pt;
    margin-right: 15px;
    padding-bottom: 5px;
    text-decoration: none !important;
    list-style: none !important;
  `}
    `;

    const UL = styled.ul``;

    const Links = styled.a`
      color: white;
    `;
    return (
      <LinkedList>
        <UL>
          <List>
            <Links
              as="a"
              href="https://steamcommunity.com/profiles/76561198112819248/"
            >
              Video Games <i className={`fa fa-gamepad `} />
            </Links>
          </List>
          <Right>
            <Links href="https://www.facebook.com/groups/311739072291023/">
              Golf <i className={`fas fa-golf-ball`} />
            </Links>
          </Right>
          <List>
            <Links href="https://www.facebook.com/groups/BrownFamilyLeague/">
              Bowling <i className={`fas fa-bowling-ball`} />
            </Links>
          </List>
          <Right>
            <Links href="https://github.com/BrownJason">
              Aspiring Developer <i className={`fas fa-server`} />
            </Links>
          </Right>
        </UL>
      </LinkedList>
    );
  }
}

export default InterestList;
