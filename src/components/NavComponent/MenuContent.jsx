import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import './MenuContent.css';
import link1 from '../../Links/link1.json';
import link2 from '../../Links/link2.json';
import link3 from '../../Links/link3.json';
import link4 from '../../Links/link4.json';

const Link = styled(NavLink)`
  display: block;
  padding: 1em 15px;
  color: inherit;
  text-decoration: none !important;
  border-bottom: 1px solid #ddd;
  &:hover {
    color: inherit;
    text-decoration: none !important;
    background-color: #eee;
  }
  &:focus {
    text-decoration: none !important;
  }
  &:visited {
    color: inherit;
  }
`;

class MenuContent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      items: [link1, link2, link3, link4]
    };
  }

  render () {
    return (
      <div className='menu'>
        {this.state.items.map(i => (
          <div key={i.title}>
            <Link to={`${i.link}`} onClick={this.props.closeCallback}>
              {i.title}
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

MenuContent.PropTypes = {
  closeCallback: PropTypes.func.isRequired
};

export default MenuContent;
