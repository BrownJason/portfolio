import React from 'react';
import classes from './HeadShot.css';

import resume from '../../../../documents/Resume.pdf';

class HeadShot extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    if (isMobile) {
      return (
        <div className={classes.HeadshotMobile}>
          <img src={require('../../../../images/JBrown.jpg')} alt="" />
          <span>
            <a href={resume}>- Link to Resume -</a>
          </span>
        </div>
      );
    } else {
      return (
        <div className={classes.Headshot}>
          <img src={require('../../../../images/JBrown.jpg')} alt="" />
          <span>
            <a href={resume}>- Link to Resume -</a>
          </span>
        </div>
      );
    }
  }
}

export default HeadShot;
