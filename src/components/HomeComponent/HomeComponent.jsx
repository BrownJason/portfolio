import React, { Component } from 'react'
import {
  Outer,
  OuterContent,
  AboutMe,
  BioContent,
  BioRight,
  Bio,
  Download,
  LinkedLikes,
  right,
  Headshot
} from './HomeComponent.css'

import pdf from '../../documents/bio.docx'

class HomeComponent extends Component {
  render () {
    return (
      <div className={Outer}>
        <div className={OuterContent}>
          <div className={AboutMe}>
            <h2>Jason Brown</h2>
          </div>
          <div className={BioContent}>
            <div className={LinkedLikes}>
              <ul>
                <li>Video Games <i class='fa fa-gamepad' /></li>
                <li className={right}>Golf <i class='fas fa-golf-ball' /></li>
                <li>
                  <a href='https://www.facebook.com/groups/BrownFamilyLeague/?multi_permalinks=1505068672949853&notif_id=1524528902152711&notif_t=group_activity&ref=notif'>
                    Bowling <i class='fas fa-bowling-ball' />
                  </a>
                </li>
                <li />
                <li className={right}>
                  Aspiring Developer <i class='fas fa-server' />
                </li>
              </ul>
            </div>
            <div className={Headshot}>
              <img src={require('../../images/JBrown.jpg')} alt='' />
            </div>
            <div className={BioRight}>
              <div>
                <a href={pdf} target='_blank'>
                  <div className={Bio}>

                    <h2>
                      <i className='fa fa-file'>
                        <span> Biography</span>
                      </i>
                      <span class={Download}>Download</span>
                    </h2>

                  </div>
                </a>
                <p>
                  Jason Brown was raised in Wayne, MI, a suburb of Detroit. He was an avid gamer and reader from a young age; where he would pursue the creative side of video games, reading, and learning to draw. He gained interest in coding through playing videos at his grandparents place on the weekends with his cousins. While in college, pursuing an Computer Science degree, he self-studied programming languages to help purse creating video games. Jason enrolled in the FastTrack’D program to jumpstart his career in this ever exciting and expanding field. In his free time, he enjoys gaming with friends, contemplating how game logic is coded, bowling and golfing with family, and donating to charity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeComponent
