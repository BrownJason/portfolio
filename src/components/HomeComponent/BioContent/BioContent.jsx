import React from 'react'
import classes from './BioContent.css'
import InterestList from './InterestList/InterestList'
import HeadShot from './HeadShot/HeadShot'
import Biography from './BiographyComponent/Biography'

const BioContent = () => (
    <div className={classes.BioContent}>
        <InterestList />
        <HeadShot />
        <Biography />
    </div>
)

export default BioContent