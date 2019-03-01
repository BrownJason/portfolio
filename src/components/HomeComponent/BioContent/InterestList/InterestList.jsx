import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

const LinkedList = styled.div`
  margin-top: 50px;
  width: 500px;
  ${media.lessThan('medium')`
    flex-direction: column;
    margin-top: 0px;
    margin-bottom: 10px;
    margin-right: 10px;
    padding-left: -10em;
    height: 100%;
    width: 100%;
  `}
`;

const List = styled.li`
  font-size: 28pt;
  padding-bottom: 5px;
  text-decoration: none;
  list-style: none;
  ${media.lessThan('medium')`
    flex-direction: column;
    font-size: 14pt;
    margin-left: -25px;
  `}
`;

const Right = styled.li`
  font-size: 28pt;
  padding-bottom: 5px;
  float: right;
  margin-right: 15px;
  text-decoration: none;
  list-style: none;
  ${media.lessThan('medium')`
    flex-direction: column;
    font-size: 14pt;
  `}
`;

const UL = styled.ul`
`;

const Links = styled.a`
  color: white;
  text-decoration: none;
  list-style: none;
`;

class InterestList extends React.Component {
  render () {
    return (
      <LinkedList>
        <UL>
          <List>
            <Links as='a' href="https://steamcommunity.com/profiles/76561198112819248/">
              Video Games{' '}
              <i className={`fa fa-gamepad `} />
            </Links>
          </List>
          <Right>
            <Links href="https://www.facebook.com/groups/311739072291023/">
              Golf <i className={`fas fa-golf-ball`} />
            </Links>
          </Right>
          <List>
            <Links href="https://www.facebook.com/groups/BrownFamilyLeague/">
              Bowling{' '}
              <i className={`fas fa-bowling-ball`} />
            </Links>
          </List>
          <Right>
            <Links href="https://github.com/BrownJason">
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
