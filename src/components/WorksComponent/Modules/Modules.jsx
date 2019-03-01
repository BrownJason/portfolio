import React from 'react';

import media from 'styled-media-query';
import styled from 'styled-components';

const Outer = styled.div`
  background: white;
  border-radius: 15px;
  padding: 10px;
  margin-left: 25px;
  text-decoration: none;
  justify-content: center;
  width: 32em;
  ${media.lessThan('medium')`
    height: 100%;
    padding: 0;
    margin-bottom: 50px;
    text-decoration: none;
    width: 100%;
  `}
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

const Paragraph = styled.p`
  color: black;
  text-decoration: none;
`;

const Image = styled.img`
  width: 100%;
  ${media.lessThan('medium')`
    width: 100%;
  `}
`;

const Header = styled.h4`
  align: center;
`;

const Modules = props => {
  return (
    <Outer>
      <Link href={`${props.link}`}>
        <div>
          <Header>
            <i class={props.icon} />
            &nbsp;&nbsp;
            {props.headerText}
          </Header>
          <Image src={require(`../../../images/${props.img}.PNG`)} alt='' />
          <Paragraph>
            {props.pBefore}
            <br />
            {props.pAfter}
          </Paragraph>
        </div>
      </Link>
    </Outer>
  );
};

export default Modules;
