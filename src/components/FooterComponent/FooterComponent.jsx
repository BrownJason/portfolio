import React from 'react';
import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';

const slide = keyframes`
  from { transform: translate3d(1200px, 20px, 0);  }
  to   { transform: translate3d(-1200px, 20px, 20px); }
  ${media.lessThan('medium')`
    
  from { transform: translate3d(80px, 20px, 0);  }
  to   { transform: translate3d(-100px, 20px, 20px); }
  `}
`;

const InvisibleSquare = styled.p` 
  width: 35px;
  height: 18px;
  margin-top: -10px;
  background: transparent;
  border: 4px solid black;
  border-radius: 4px;
  animation: ${slide} 15s linear infinite;
  text-color: blue;
`;

const Ball = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;  
  margin-left: -5px;
  margin-right: -5px;
  background-color: #FF5722;
  animation: ${slide} 15s linear infinite;
`;

const Ul = styled.ul`
  display: inline-flex;
  margin-top: 15px;
  list-style: none;
  color: black;
  font-size: 10px;
`;

const Footer = styled.footer`
  background: white;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  z-index: 1001;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
`;

class FooterComponent extends React.Component {
  render () {
    return (
      <Footer>
        <Ul>
          <li>© 2018 Copyright Jason Brown</li>
          <Ball />
          <InvisibleSquare>Jason
          </InvisibleSquare>
          <Ball />
        </Ul>
      </Footer>
    );
  }
}

export default FooterComponent;
