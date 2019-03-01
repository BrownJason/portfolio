import React, { Fragment } from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  color: black;
`;

const Header = styled.h3`
  color: black;
`;

const Links = styled.a`
  color: blue;
`;

const List = styled.li`
  width: 100%;
`;

const Divider = styled.div`
  width: 100%;
`;

const Questions = props => {
  return (
    <Divider>
      <List>
        <Header>{props.headerText}</Header>
        {props.pText ? (
          <Paragraph>{props.pText}</Paragraph>
        ) : (
          <Fragment>
            <Paragraph>
              {props.beforeLink}
              <Links as="a" href={`${props.link}`}>
                {' '}
                {props.linkText}{' '}
              </Links>
              {props.afterLink}
            </Paragraph>
          </Fragment>
        )}
      </List>
    </Divider>
  );
};

export default Questions;
