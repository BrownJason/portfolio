import React from 'react'
import classes from './BioContent.css'
import InterestList from './InterestList/InterestList'
import HeadShot from './HeadShot/HeadShot'
import Biography from './BiographyComponent/Biography'

class BioContent extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth});
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    if(isMobile){
      return (
        <div className={classes.BioContent}>
          <InterestList />
          <HeadShot />
          <Biography />
        </div>
      );
    } else {
      return (
        <div className={classes.BioContent}>
          <InterestList />
          <HeadShot />
          <Biography />
        </div>
      );
    }
  }
}

export default BioContent
