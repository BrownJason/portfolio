import React, { Fragment } from 'react';
import styled from 'styled-components';

class Questions extends React.Component {
  render() {
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

    return (
      <Divider>
        <List>
          <Header>{this.props.headerText}</Header>
          {this.props.pText ? (
            <Paragraph>{this.props.pText}</Paragraph>
          ) : (
            <Fragment>
              <Paragraph>
                {this.props.beforeLink}
                <Links as="a" href={`${this.props.link}`}>
                  {' '}
                  {this.props.linkText}{' '}
                </Links>
                {this.props.afterLink}
              </Paragraph>
            </Fragment>
          )}
        </List>
      </Divider>
    );
  }
}

export default Questions;
