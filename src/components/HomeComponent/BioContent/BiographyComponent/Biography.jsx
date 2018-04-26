import React from 'react'
import classes from './Biography.css'

import pdf from '../../../../documents/bio.docx'

const Biography = () => (
    <div className={classes.BioRight}>
        <div>
        <a href={pdf} target='_blank'>
            <div className={classes.Bio}>
            <h2>
                <i className='fa fa-file'>
                <span> Biography</span>
                </i>
                <span class={classes.Download}>Download</span>
            </h2>
            </div>
        </a>
        <p>
            Jason Brown was raised in Wayne, MI, a suburb of Detroit. He was an avid gamer and reader from a young age; where he would pursue the creative side of video games, reading, and learning to draw. He gained interest in coding through playing videos at his grandparents place on the weekends with his cousins. While in college, pursuing an Computer Science degree, he self-studied programming languages to help purse creating video games. Jason enrolled in the FastTrack’D program to jumpstart his career in this ever exciting and expanding field. In his free time, he enjoys gaming with friends, contemplating how game logic is coded, bowling and golfing with family, and donating to charity.
        </p>
        </div>
    </div>
)

export default Biography