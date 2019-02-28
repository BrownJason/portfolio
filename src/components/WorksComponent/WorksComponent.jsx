import React from 'react'
import classes from './WorksComponent.css'
// import JavaModule from './JavaModule/JavaModuel'
// import SpringModule from './SpringModule/SpringModule'
// import ReactModule from './ReactModule/ReactModule'
// import JSModule from './JavaScripModule/JSModule'

import Modules from './Modules/Modules'

class WorksComponent extends React.Component {
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

  render () {
    const { width } = this.state;
    const isMobile = width <= 500;

    if(isMobile){
      return (
        <div></div>
      );
    } else {
      return (
      <div className={classes.Outer}>
        <div className={classes.OuterContent}>
          <div className={classes.Inner}>
            {this.props.modules.map(modules => (
              <Modules
                key={modules.h3}
                headerText={modules.h3}
                icon={modules.title}
                pBefore={modules.pBeforeBr}
                pAfter={modules.pAfterBr}
                link={modules.link}
                img={modules.img}
              >{modules.h3}</Modules>
            ))}
          </div>
        </div>
      </div>
      );
    }
  }
}

// class WorksComponent extends Component {
//   constructor() {
//     super();
//     this.state = {
//       width: window.innerWidth,
//     };
//   }

//   componentWillMount() {
//     window.addEventListener('resize', this.handleWindowSizeChange);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('resize', this.handleWindowSizeChange);
//   }

//   handleWindowSizeChange = () => {
//     this.setState({ width: window.innerWidth});
//   };

//   render () {
//     const { width } = this.state;
//     const isMobile = width <= 500;

//     if(isMobile){
//       return (
//         <div className={classes.Mobile}>
//           <JSModule />
//           <ReactModule />
//           <SpringModule />
//           <JavaModule />
//         </div>
//       );
//     } else {
//       return (
//         <div className={classes.Outer}>
//           <div className={classes.OuterContent}>
//             <div className={classes.Inner}>
//               <JSModule />
//               <ReactModule />
//               <SpringModule />
//               <JavaModule />
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }
// }

export default WorksComponent;
