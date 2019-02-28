import React, { Component } from 'react'
import {
  Outer,
  OuterContent,
  AboutMe,
  OuterMobile,
  OuterContentMobile,
  AboutMeMobile,
} from './HomeComponent.css'
import BioContent from './BioContent/BioContent'

class HomeComponent extends Component {
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
      <div className={OuterMobile}>
        <div className={OuterContentMobile}>
          <div className={AboutMeMobile}>
            <h2>Jason Brown</h2>
          </div>
          <BioContent />
        </div>
      </div>
      );
    } else{
      return (
      <div className={Outer}>
        <div className={OuterContent}>
          <div className={AboutMe}>
            <h2>Jason Brown</h2>
          </div>
          <BioContent />
        </div>
      </div>
      );
    }
  }
}

export default HomeComponent
