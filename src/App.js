import React, { Component } from 'react';
import HomeComponent from './components/HomeComponent/HomeComponent';
import NavComponent from './components/NavComponent/NavComponent';
import WorksComponent from './components/WorksComponent/WorksComponent';
import InterestComponent from './components/InterestComponent/InterestComponent';
import StoryComponent from './components/StoryComponent/StoryComponent';
import { Route } from 'react-router-dom';
import FooterComponent from './components/FooterComponent/FooterComponent';

import questions1 from './StoryQuestions/questions1.json';
import questions2 from './StoryQuestions/questions2.json';
import questions3 from './StoryQuestions/questions3.json';
import questions4 from './StoryQuestions/questions4.json';
import questions5 from './StoryQuestions/questions5.json';
import questions6 from './StoryQuestions/questions6.json';
import questions7 from './StoryQuestions/questions7.json';

import modules1 from './WorksText/modules1.json';
import modules2 from './WorksText/modules2.json';
import modules3 from './WorksText/modules3.json';
import modules4 from './WorksText/modules4.json';

import detroit from './images/detroit.jpg';
import detroit2 from './images/detroit2.jpg';
import background from './images/background.jpg';

import pathOfExile from './images/pathOfExile.jpg';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      questions: [
        questions1,
        questions2,
        questions3,
        questions4,
        questions5,
        questions6,
        questions7
      ],
      modules: [modules1, modules2, modules3, modules4],
      pOE: pathOfExile,
      backgroundIndex: 1,
      length: 3,
      index: 0
    };
    this.imgs = [detroit, detroit2, background];
    this.changeBackground = this.changeBackground.bind(this);
  }

  componentDidMount () {
    this.timeout = setTimeout(this.changeBackground, this.state.length * 2000);
  }

  componentWillUnmount () {
    if (this.timeout) clearTimeout(this.timeout);
  }

  changeBackground () {
    this.setState(
      function ({ backgroundIndex }) {
        const nextBackgroundIndex = ++backgroundIndex % this.imgs.length;

        return { backgroundIndex: nextBackgroundIndex };
      },
      function () {
        this.timeout = setTimeout(
          this.changeBackground,
          this.state.length * 2000
        );
      }
    );
  }

  render () {
    const image = this.state.pOE;
    return (
      <div className="App" id="home">
        <NavComponent />
        <div>
          <Route
            exact
            path={'/'}
            render={() => (
              <HomeComponent imgs={this.imgs[this.state.backgroundIndex]} />
            )}
          />
          <Route
            exact
            path={'/Story'}
            render={() => <StoryComponent questions={this.state.questions} imgs={this.imgs[this.state.backgroundIndex]}/>}
          />
          <Route
            exact
            path={'/Works'}
            render={() => (
              <WorksComponent
                modules={this.state.modules}
                img={this.imgs[this.state.backgroundIndex]}
              />
            )}
          />
          <Route
            exact
            path={'/Interests'}
            render={() => <InterestComponent image={image} />}
          />
        </div>
        <FooterComponent />
      </div>
    );
  }
}

export default App;
