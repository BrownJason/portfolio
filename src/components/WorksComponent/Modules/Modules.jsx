import React from 'react';

import media from 'styled-media-query';
import styled from 'styled-components';

class Modules extends React.Component {
  render () {
    const Outer = styled.div`
      background: white;
      border-radius: 15px;
      padding: 10px;
      margin-left: 25px;
      text-decoration: none;
      justify-content: center;
      width: 32em;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.6), 0 6px 20px 0 rgba(0,0,0,0.6);
      ${media.lessThan('medium')`
        height: 100%;
        padding: 10px;
        margin-bottom: 50px;
        text-decoration: none;
        width: 100%;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.6), 0 6px 20px 0 rgba(0,0,0,0.6);
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
    return (
      <Outer>
        <Link href={`${this.props.link}`}>
          <div>
            <Header>
              <i class={this.props.icon} />
              &nbsp;&nbsp;
              {this.props.headerText}
            </Header>
            <Image src={require(`../../../images/${this.props.img}.PNG`)} alt="" />
            <Paragraph>
              {this.props.pBefore}
              <br />
              {this.props.pAfter}
            </Paragraph>
          </div>
        </Link>
      </Outer>
    );
  }
}

export default Modules;
