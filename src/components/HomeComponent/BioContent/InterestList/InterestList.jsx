import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

const LinkedList = styled.div`
  width: 40em;
  display: flex;
  flex-direction: column;
  ${media.between('medium', 'large')`
    width: 100%;
  `}
  ${media.lessThan('medium')`
    width: 100%;
  `}
`;

const List = styled.div`
  display: flex;
  font-size: 28pt;
  padding-bottom: 5px;
  text-decoration: none !important;
  list-style: none !important;
  margin: auto;
  text-align: left; 
  ${media.between('medium', 'large')`
    flex-direction: column;
    height: 100%;
    width: 100%;
  `}
  ${media.lessThan('medium')`
    font-size: 14pt;
    maring-left: 100px;
    padding-bottom: 5px;
    text-decoration: none !important;
    list-style: none !important;
  `}
`;

const Right = styled.div`
  font-size: 28pt;
  padding-bottom: 5px;
  float: right;
  margin: auto;
  text-decoration: none !important;
  list-style: none !important;
  text-align: right;
  ${media.lessThan('medium')`
    font-size: 14pt;
    margin-right: 50px;
    padding-bottom: 5px;
    text-decoration: none !important;
    list-style: none !important;
  `}
`;

const UL = styled.ul`
`;

const Links = styled.a`
  color: white;
  text-decoration: none !important;
  list-style: none !important;
  text-shadow: 10px 0 10px  black;
  &:hover {
    color: white;
    background-color: black;
  }
`;

class InterestList extends React.Component {
  render () {
    return (
      <LinkedList>
        <UL>
          <List>
            <Links href='https://steamcommunity.com/profiles/76561198112819248/'>
              Video Games{' '}
              <i className={`fa fa-gamepad `} />{' '}
            </Links>
            <div />
            <Links href='https://www.facebook.com/groups/BrownFamilyLeague/'>
              Bowling{' '}
              <i className={`fas fa-bowling-ball`} />
            </Links>
          </List>
          <Right>
            <Links href='https://www.facebook.com/groups/311739072291023/'>
              Golf <i className={`fas fa-golf-ball`} />{' '}
            </Links>
            <div />
            <Links href='https://github.com/BrownJason'>
              Aspiring Developer{' '}
              <i className={`fas fa-server`} />
            </Links>
          </Right>
        </UL>
      </LinkedList>
    );
  }
}

export default InterestList;
