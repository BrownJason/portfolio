import React from 'react'
import classes from './HeadShot.css'

import resume from '../../../../documents/Resume.pdf'

const HeadShot = () =>(
    <div className={classes.Headshot}>
        <img src={require('../../../../images/JBrown.jpg')} alt='' />
        <span><a href={resume}>- Link to Resume -</a></span>
    </div>
)

export default HeadShot