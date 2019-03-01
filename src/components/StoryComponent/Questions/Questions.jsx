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

const Questions = props => {
  return (
    <li>
      <Header>{props.headerText}</Header>
      {props.pText ? (
        <Paragraph>{props.pText}</Paragraph>
      ) : (
        <Fragment>
          <Paragraph>
            {props.beforeLink}
            <Links as='a' href={`${props.link}`}>
              {' '}
              {props.linkText}{' '}
            </Links>
            {props.afterLink}
          </Paragraph>
        </Fragment>
      )}
    </li>
  );
};

export default Questions;
